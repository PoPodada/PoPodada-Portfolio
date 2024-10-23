import Image from "next/image";

const BlogCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-[300px]">
            <div className="h-40 bg-gray-200"></div>
            <div className="px-1">
                <div className="flex">
                    <Image 
                        src="/clock.svg"
                        width={20}
                        height={20}
                        alt="" 
                        className="opacity-50 mr-1"/>
                    <p className="opacity-50 font-bold">2024/10/18</p>
                </div>
                <div className="h-[40px] flex items-center ml-1">
                    <h2 className="text-lg font-bold">ブログタイトル </h2>  
                </div>
            </div>
        </div>
    )
}

export default BlogCard;
