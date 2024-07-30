package main

import "encoding/json"

func PrettyPrint(i any) {
	s, _ := json.MarshalIndent(i, "", "  ")
	println(string(s))
}
