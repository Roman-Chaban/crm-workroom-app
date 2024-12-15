import { ChangeEvent } from 'react';

export type EventType = ChangeEvent<HTMLInputElement>;
export type Email = string;
export type Password = string;
export type Remember = boolean;
export type ErrorMessage = string | null;
