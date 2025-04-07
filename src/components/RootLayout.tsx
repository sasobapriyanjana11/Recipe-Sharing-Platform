import Navigation from "./Navigation.tsx";
import {Outlet} from "react-router";

const RootLayout = () => {
    return (
        <>
            <Navigation></Navigation>
            <main className="p-4">
                <Outlet></Outlet>
            </main>
        </>
    )
}

export default RootLayout;