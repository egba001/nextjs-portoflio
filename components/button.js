const Button = ({ linkTo, children}) => {

    return (
        <a href={linkTo} target='_blank' className='p-3 hover:opacity-50 group-[hover:bg-purple-500]: relative rounded-full border border-purple-500 text-sm md:text-base'>
            <div className="flex items-center justify-center bg-darkGray">
                {children}
            </div>
        </a>
    )
}



export default Button;