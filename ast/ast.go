package ast

type Function struct {
	ReturnType Type
	Name    string
	Comment string
	Params  []FunctionParam
}

type Type uint8

const (
	TypeString Type = iota
	TypeBool
	TypeNumber
)

type FunctionParam struct {
	Name string
	Type string
}
