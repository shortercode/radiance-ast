import type { Position } from './position.type';

export interface Node<T extends string = string> {
	readonly start: Position;
	readonly end: Position;
	readonly type: T;
}