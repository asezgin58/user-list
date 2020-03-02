import React, {useEffect, useState} from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@material-ui/core";
import {ISubTest1State, ISubTest1StateDefaultValue, IProps} from "./type";
import MUIDataTable from "mui-datatables";

const List = (props: IProps) => {

    const dummyData: any = [
        {
            id: 1,
            name: 'Aykut',
            email: 'aykut@a.com',
            phoneNumber: '05554443322',
            city: 'Istanbul'
        },
        {
            id: 2,
            name: 'Rıdvan',
            email: 'rıdvan@a.com',
            phoneNumber: '05554443322',
            city: 'Istanbul'
        },
        {
            id: 3,
            name: 'Samet',
            email: 'samet@a.com',
            phoneNumber: '05554443322',
            city: 'Sivas'
        }
    ];

    const [state, setState] = useState<ISubTest1State>(ISubTest1StateDefaultValue);

    const {
        data,
        modalShow,
        name,
        email,
        city,
        phoneNumber,
        id
    } = state;

    useEffect(() => {
        setState((prevState: any) => ({
            ...prevState,
            data: dummyData
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e: any) => {
        e.persist();

        setState((prevState: any) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const saveData = () => {
        let filterData: any = data.filter(item => item.id === id)[0];

        if (filterData) {

            filterData.name = name;
            filterData.email = email;
            filterData.city = city;
            filterData.phoneNumber = phoneNumber;

            setState((prevState: any) => ({
                ...prevState,
                modalShow: false
            }));
        }
    };

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Box>
                        <MUIDataTable
                            title={"User List"}
                            data={data}
                            columns={[
                                {
                                    name: "id",
                                    label: "Id",
                                    options: {
                                        display: "false"
                                    }
                                },
                                {
                                    name: "name",
                                    label: "Name",
                                },
                                {
                                    name: "email",
                                    label: "Email",
                                },
                                {
                                    name: "phoneNumber",
                                    label: "PhoneNumber",
                                },
                                {
                                    name: "city",
                                    label: "City",
                                },

                                {
                                    name: "",
                                    label: "Action",
                                    options: {
                                        customBodyRender: (value, tableMeta, updateValue) => {
                                            return (
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => {
                                                        setState((prevState: any) => ({
                                                            ...prevState,
                                                            ...data.filter(item => item.id === tableMeta.rowData[0])[0],
                                                            modalShow: true
                                                        }))
                                                    }}
                                                >
                                                    Edit
                                                </Button>
                                            );
                                        }
                                    }
                                }
                            ]}
                            options={{
                                serverSide: true,
                                selectableRows: 'none',
                                filter: false,
                                sort: false,
                                search: false,
                                print: false,
                                download: false,
                                pagination: false
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>

            <Dialog
                open={modalShow}
                maxWidth={"xs"}
                fullWidth={true}
                onClose={() => {
                    setState((prevState: any) => ({
                        ...prevState,
                        modalShow: false
                    }))
                }}
            >
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent>
                    <Box marginY={2}>
                        <TextField
                            id="name"
                            name="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box marginY={2}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box marginY={2}>
                        <TextField
                            id="city"
                            name="city"
                            label="City"
                            variant="outlined"
                            fullWidth
                            value={city}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box marginY={2}>
                        <TextField
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            value={phoneNumber}
                            onChange={handleChange}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setState((prevState: any) => ({
                                ...prevState,
                                modalShow: false,
                            }))
                        }}
                        color="secondary">
                        Cancel
                    </Button>
                    <Button
                        onClick={saveData}
                        color="primary" autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default List;