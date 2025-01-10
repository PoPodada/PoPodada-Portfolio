import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/Date";

type BlogCardProps = {
	id: string;
  title: string;
  createdAt: string;
  imgURL?: string;
};

const BlogCard = (props: BlogCardProps) => {
  return (
    <Link href={`/${props.id}`} className="w-[300px] mx-6 my-2">
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-[300px]">
        <div className="h-[150px] bg-gray-200">
        
          {props.imgURL ? (
            <Image
              src={props.imgURL ? props.imgURL: ""}
              width={300}
              height={150}
              alt=""
              className=""
            />
          ):(
            <div></div>
          )}
        </div>
        <div className="px-1">
          <div className="flex">
            <Image
              src="/clock.svg"
              width={20}
              height={20}
              alt=""
              className="opacity-50 mr-1 mt-1"
            />
            <p className="opacity-50 font-bold mt-1">{formatDate(props.createdAt)}</p>
          </div>
          <div className="h-[80px] ml-1">
            <h2 className="text-lg font-bold">{props.title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
