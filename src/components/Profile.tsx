"use server";

import Image from "next/image";

const Profile = () => {
  return (
    <div className="rounded-md bg-[#f0f8ff] shadow-md h-[350px]">
      <div className="flex items-center flex-col h-[200px] justify-center">
        <Image src="/profile.webp" width={100} height={100} alt="profile" />
        <h2>PoPodada</h2>
        <div className="flex justify-center">
          <a href="https://x.com/PButabara" className="mr-1">
            <Image src="/x.svg" width={20} height={20} alt="x" />
          </a>
          <a href="https://github.com/PoPodada">
            <Image src="/github.svg" width={20} height={20} alt="github" className="ml-1"/>
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-[100px] px-4">
        <p>大学生</p>
        <p>
          情報科学部に通いながら、趣味でハッカソンに参加したり、webアプリ開発に関する学習をしています。
        </p>
      </div>
    </div>
  );
};

export default Profile;
