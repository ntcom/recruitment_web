import React from 'react'
import BannerView from '@/app/components/common/banner-view';
import CategoryArea from '@/app/components/home/categoryArea';
import PortalArea from '@/app/components/home/portalArea';
import Statis from '@/app/components/about/statisArea/StatisArea';
import PopularArea from '@/app/components/home/popularArea';

function About() {
  return (
    <main>
      <BannerView title="About"/>
      <CategoryArea />
      <PortalArea />
      <Statis />
      <PopularArea />
    </main>
  )
}

export default About