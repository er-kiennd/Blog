import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div>
            {/* Content top */}
            <div className="flex justify-between w-[1312px] py-[42px] m-auto border-b-[1px] border-solid border-[#13131329]">
                <div className="w-[20%]">
                    <Image src="/public/next.svg" alt="logo" width={148} height={44}/>
                    <p className="mt-[16px] text-[16px] font-medium leading-6 text-[#13131399]">
                        Our vision is to provide convenience and help increase your sales business.
                    </p>
                </div>

                <div className="w-[50%] grid grid-rows-1 grid-cols-3 gap-[60px]">
                    <div>
                        <p className="text-[#1A202C] text-[20px] leading-[30px]">About</p>
                        <p className="mt-[16px] text-[16px] font-medium leading-6 text-[#13131399]">How it works</p>
                        <p className="mt-[12px] text-[16px] font-medium leading-6 text-[#13131399]">Featured</p>
                        <p className="mt-[12px] text-[16px] font-medium leading-6 text-[#13131399]">Partnership</p>
                        <p className="mt-[12px] text-[16px] font-medium leading-6 text-[#13131399]">Bussiness Relation</p>
                    </div>

                    <div>
                        <p className="text-[#1A202C] text-[20px] leading-[30px]">Community</p>
                        <p className="mt-[16px] text-[16px] font-medium leading-6 text-[#13131399]">Event</p>
                        <p className="mt-[12px] text-[16px] font-medium leading-6 text-[#13131399]">Blog</p>
                        <p className="mt-[12px] text-[16px] font-medium leading-6 text-[#13131399]">Podcast</p>
                        <p className="mt-[12px] text-[16px] font-medium leading-6 text-[#13131399]">Invite a friend</p>
                    </div>

                    <div>
                        <p className="text-[#1A202C] text-[20px] leading-[30px]">Socials</p>
                        <p className="mt-[16px] text-[16px] font-medium leading-6 text-[#13131399]">Discord</p>
                        <p className="mt-[12px] text-[16px] font-medium leading-6 text-[#13131399]">Instagram</p>
                        <p className="mt-[12px] text-[16px] font-medium leading-6 text-[#13131399]">Twitter</p>
                        <p className="mt-[12px] text-[16px] font-medium leading-6 text-[#13131399]">Facebook</p>
                    </div>
                </div>
            </div>
            {/* Content bottom */}
            <div className="flex justify-between w-[1312px] py-[24px] m-auto">
                <div>
                    <p className="text-[16px] font-semibold leading-6 text-[#1A202C]">©2022 MORENT. All rights reserved</p>
                </div>

                <div className="flex gap-12">
                    <p className="text-[16px] font-semibold leading-6 text-[#1A202C]">Privacy & Policy</p>
                    <p className="text-[16px] font-semibold leading-6 text-[#1A202C]">Terms & Condition</p>
                </div>
            </div>
        </div>
    )
}

export default Footer