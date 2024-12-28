"use server";

const Header = () => {
    return (
        <header className="bg-[#009EF3] h-[60px] w-full fixed top-0 left-0 z-50">
            <div className="max-w-[1080px] mx-auto flex items-center h-full px-[10px]">
                <h1 className="text-white text-[30px] font-bold">PoPoブログ</h1>
            </div>
        </header>
    )
}

export default Header;
