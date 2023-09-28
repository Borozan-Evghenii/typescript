import {ChangeEvent, FC, ReactNode} from "react";

enum ComponentType {
    outlined= 'outline',
    primary= 'primary',
    rounded= 'rounded'
}

interface PropsComponentInterface {
    width?: number // ? make props optional
    height? : number
    onChange: (e:ChangeEvent<HTMLElement>) => void
    children: ReactNode //If component is typed with FC children is added automaticaly
    variant: ComponentType
    background: string
}

const PropsComponents:FC<PropsComponentInterface> = ({width, height, background}) =>  {
    return (
        <div style={{height: height, width: width, background: background}}>

        </div>
    );
}

export default PropsComponents;