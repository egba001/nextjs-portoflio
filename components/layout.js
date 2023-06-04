const Layout = ({children}) => {
    return (
        <div className={` w-full grid justify-center h-full bg-darkGray`}>
            {children}
        </div>
    )
}
export default Layout;