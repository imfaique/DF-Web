import React from 'react'
import SideBar from '../../components/SideBar'
import Registration from '../Registration'
import Booking from '../Booking'
import Billing from '../Billing'
import Complain from '../Complain';
import CarRegistration from '../CarRegistration'
import CompareImage from '../CompareImage'
import ShowDriverReg from '../ShowDriverReg'
import ShowVehicleDetails from '../ShowVehicleDetails'
import { Route, Switch } from 'react-router'

export default function Home() {

    const [username, setUser] = React.useState('')

    React.useEffect(() => {
        try {
            let user = localStorage.getItem('@admin')
            if (user) {
                user = JSON.parse(user)
                setUser(user.name)
            }
        } catch (e) {

        }
    })

    return (
        <>
            <div>
                <SideBar
                    name={username}
                />
            </div>
            <div>
                <Switch>
                    <Route exact path="/home/Registration" component={Registration} />
                    <Route exact path="/home/ShowDriverReg" component={ShowDriverReg} />
                    <Route exact path="/home/CarRegistration" component={CarRegistration} />
                    <Route exact path="/home/ShowVehicleDetails" component={ShowVehicleDetails} />
                    <Route exact path="/home/Booking" component={Booking} />
                    <Route exact path="/home/Billing" component={Billing} />
                    <Route exact path="/home/Complain" component={Complain} />
                    <Route exact path="/home/CompareImage" component={CompareImage} />
                    {<Route path="*" component={Registration} />}
                </Switch>
            </div>
        </>
    )

}