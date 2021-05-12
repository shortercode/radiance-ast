import type { Expression } from './expression.type';
import type { TypePattern } from './type_pattern.type';

export interface ValueDescription {
	type_pattern: TypePattern | null;
	name: string;
	initial: Expression | null;
}