import { InputTypeEnum } from "./Enum"

export interface Ivec2 {
    x: number
    y: number
}

export interface IActor {
    id: number,
    position: Ivec2,
    direction: Ivec2
}

export interface IState {
    actors: any[]
}

export interface IActorMove {
    id: number,
    type: InputTypeEnum.ActorMove,
    direction: Ivec2,
    dt: number
}