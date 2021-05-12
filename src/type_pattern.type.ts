import type { ValueDescription } from './value_description.type';

export interface ClassTypePattern {
	type: 'class_type';
	name: string;
}

export interface ArrayTypePattern {
	type: 'array_type';
	subtype: TypePattern;
	count: number;
}

export interface MemberTypePattern {
	type: 'member_type';
	object: TypePattern;
	member: string; 
}

export interface TupleTypePattern {
	type: 'tuple_type';
	subtypes: TypePattern[];
}

export interface GenericTypePattern {
	type: 'generic_type';
	object: TypePattern;
	subtypes: TypePattern[];
}

export interface FunctionParameter {
	name: string;
	type_pattern: TypePattern;
}

export interface FunctionTypePattern {
	type: 'function_type';
	name: string;
	parameters: ValueDescription[];
	result: TypePattern | null;
}

export type TypePattern = ClassTypePattern
	| ArrayTypePattern
	| MemberTypePattern
	| TupleTypePattern
	| GenericTypePattern
	| FunctionTypePattern;