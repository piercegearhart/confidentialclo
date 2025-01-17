"use client";
import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { config } from '@/config';
import { getSiteSettings } from '@/lib/actions/dbActions';
import { Categories } from '@prisma/client';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { ArrowDown, ChevronDownIcon, ChevronUpIcon, ChevronsUpDown, Instagram, Star } from 'lucide-react';
import { cookies } from 'next/headers';
import Image from 'next/image'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [categories, setCategories] = useState<Categories[]>([]);
  const [siteSettings, setSiteSettings] = useState<any>({})

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    getSiteSettings().then((e) => {
      setSiteSettings(e);
      setCategories(e.categories);
    })
  }

  return (
    <>
      {/* <Navbar session={session} /> */}
      <div style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", contain: "size", backgroundPosition: "center", backgroundImage: "url(https://supabase.com/_next/image?url=%2Fimages%2Fblog%2Fpluggable-storage%2Fpluggable-storage.jpg&w=1920&q=75)" }} className={`relative flex min-h-screen h-screen flex-col items-center justify-between ${!isMobile ? "-mt-[7.695vh]" : "-mt-[8.9vh]"} mb-[5%] pt-16`}>
        <div className={`arrowDown absolute bottom-5 animate-bounce mb-2 ${isMobile ? "" : "mr-11"}`}>
          <ArrowDown color='white' className='w-10 h-12' />
        </div>
      </div>
      <main className={`${isMobile ? "px-4" : "px-60"} w-full mb-[10%]`}>
        <div className={`flex ${isMobile ? "flex-col pl-7" : "flex-row justify-between"} gap-10 w-full`}>
          <SideBar />
          <div className="flex flex-col w-full">
            <Link
              href={siteSettings.mainDropLink ? siteSettings.mainDropLink : "/store"}
            >
              <Image
                src={siteSettings.storeHomeImage ? siteSettings.storeHomeImage : "https://cdn.xolify.store/u/xolifycdn/Qw2twXczYX.png"}
                alt='Store Image'
                width={1000}
                height={900}
                className={`${isMobile ? "max-w-xs" : "max-w-[3068px]"} w-[65rem]`}
                loading='eager'
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
