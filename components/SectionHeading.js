const SectionHeading = ({ title }) => {
    return (
        <div className=" mb-8">
            <div className="border-l-2 border-l-purple-950 p-3 text-white w-fit">
                <h2 className=" font-thin uppercase text-white text-lg">{title}</h2>
            </div>
        </div>
    )
}
export default SectionHeading;
