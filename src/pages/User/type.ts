export interface ISubTest1State {
    data: any[],
    modalShow: boolean,
    name: string,
    phoneNumber: string,
    city: string,
    email: string,
    id: number
}

export const ISubTest1StateDefaultValue: ISubTest1State = {
    data: [],
    modalShow: false,
    name: '',
    phoneNumber: '',
    city: '',
    email: '',
    id: 0

};

export interface IProps {
    contextData: any,
    setContextData: (data: any) => void
}