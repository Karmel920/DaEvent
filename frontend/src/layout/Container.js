
function Container({children}) {
    return (
        <div className="w-full md:w-11/12 lg:max-w-[1440px] mx-auto">
            {children}
        </div>
    );
}

export default Container;