import { SideMenu } from '../../shared/Layout/SideMenu'
import { Header } from '@heroui/react'
import { MainContent } from '../../shared/Layout/MainContent'
import { Outlet } from 'react-router'

export const DashboardLayout = () => {
    return (
        <div className="p-3 h-dvh">
            <div className="h-[calc(100vh-1.5rem)] flex flex-row">
                <SideMenu />
                <div className="flex flex-col w-full px-3">
                    <Header />
                    <MainContent>
                        <Outlet />
                    </MainContent>
                </div>
            </div>
        </div>
    )
}
