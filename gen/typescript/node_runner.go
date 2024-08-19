package typescript

import (
	"fmt"
	"runtime"
	"sync"

	"github.com/tidwall/go-node"
)

var vmCap = runtime.NumCPU() - 1
var vmRunnerWg = sync.WaitGroup{}
var nodeVM node.VM

func init() {
	nodeVM = lazyInitVM()
	// Spawn 1 Node VM per CPU Core
	// vmRunnerWg.Add(vmCap)
	// lo.Times(vmCap, func(index int) any {
	// 	go func() {
	// 		nodeRunner(index)
	// 		vmRunnerWg.Done()
	// 	}()
	// 	return nil
	// })
}

func lazyInitVM() node.VM {
	var vm = node.New(&node.Options{
		// Dir: "",
		OnEmit: func(msg string) {
			fmt.Printf("Node Emit: %s\n", msg)
		},
		OnLog: func(msg string) {
			fmt.Printf("Node Log: %s\n", msg)
			// msg = strings.TrimSpace(msg)
			// if strings.TrimSpace(msg) == "" {
			// 	return;
			// }
			// println(msg)
			// println()
		},
		OnError: func(msg string) {
			// fmt.Printf("Node Error: %s\n", msg)
		},
	})
	vm.Run(`
	const { transformSchemaObject, astToString } = require("openapi-typescript");

	function schemaObjectToCode(schemaObj) {
		const ast = transformSchemaObject(schemaObj, {
			ctx: {}
		})
		// console.log('ast')
		const code = astToString(ast)
		// console.log(code)
		return code
	}
	`)
	return vm
}

var nodeJobQueue = make(chan string, vmCap)

func nodeRunner(i int) {
	var vm node.VM

	var count = 0
	for cmd := range nodeJobQueue {
		if count == 0 {
			vm = lazyInitVM()
		}
		count++
		res := vm.Run(cmd)
		fmt.Printf("NODE RES: \n%s\n\n", res)
	}

	// if count > 0 {
	// 	l.Log.Infof("Node Runner %d ran %d\n", i, count)
	// }
}