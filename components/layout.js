const Layout = ({children, inter}) => {
    return (
        <div className={`px:4 md:px-32 w-full h-full ${inter.className} bg-darkGray h-full w-full`}>
            {children}
        </div>
    )
}
export default Layout;