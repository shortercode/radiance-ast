import type { BlockExpression, Expression } from './expression.type';
import type { FunctionTypePattern, TypePattern } from './type_pattern.type';
import type { ValueDescription } from './value_description.type';
import type { Node } from './basic_node.type';

export interface ExpressionStatement extends Node<'expression_statement'> {
	expression: Expression;
}

export interface ReturnStatement extends Node<'return_statement'> {
	expression: Expression | null;
}

export interface FunctionDeclaration extends Node<'function_declaration'> {
	name: string;
	type_pattern: FunctionTypePattern;
	generics: string[];
	block: BlockExpression;
	exported: boolean;
}

export interface StructDeclaration extends Node<'struct_declaration'> {
	name: string;
	generics: string[];
	fields: ValueDescription[];
}

export interface EnumVariantDescription {
	name: string;
	fields: ValueDescription[];
}

export interface EnumDeclaration extends Node<'enum_declaration'> {
	name: string;
	generics: string[];
	variants: EnumVariantDescription[];
}

export interface ExportDeclaration extends Node<'export_declaration'> {
	name: string;
}

export interface ImportFunctionDeclaration extends Node<'import_function_declaration'> {
	name: string;
	generics: string[];
	type_pattern: FunctionTypePattern;
}

export interface TypeDeclaration extends Node<'type_declaration'> {
	type_pattern: TypePattern;
	name: string;
}

export interface LetDeclaration extends Node<'let_declaration'> {
	description: ValueDescription;
}

export type Declaration = 
	| FunctionDeclaration
	| StructDeclaration
	| EnumDeclaration
	| ExportDeclaration
	| ImportFunctionDeclaration
	| TypeDeclaration
	| LetDeclaration;

export type Statement = 
	| ExpressionStatement
	| ReturnStatement
	| Declaration;
	