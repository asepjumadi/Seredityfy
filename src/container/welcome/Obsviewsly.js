import React from 'react'
import Card from '../../components/Card'
import { Card1, Card2, Card3, PolygonIcons, PolygonIcons2, PolygonIcons3 } from '../../assets/import';
function Obsviewsly() {
  return (
    <div className='bg-fuchsia-900 bg-opacity-20 backdrop-blur-2xl mt-[-6%] border-t-0 border-fuchsia-500'>
      <div className='flex top-20 
       flex-col xl:flex-row sm:flex-col lg:flex-row 2xl:flex-row
       py-8 sm:py-20 md:py-8 lg:py-12 xl:py-16 2xl:py-20
        px-4 sm:px-36 xl:px-40 gap-8 2xl:px-80 md:justify-between justify-center items-center'>
        <Card img={Card1} imgicons={PolygonIcons} title="Using Discord" sub="Mastering the Art of Prompt Writing" content="Prompt writing involves crafting clear and engaging prompts, while using images to create a visual representation of the idea or concept." />
        <Card img={Card2} imgicons={PolygonIcons2} title="Getting Started" sub="Streamlining Collaborative Workflows" content="se the Midjourney Bot on Discord to effortlessly generate designs and artworks for your project. Simply enter a command and the bot " />
        <Card img={Card3} imgicons={PolygonIcons3} title="User Guide" sub="Unraveling the Mystery of Version" content="Explore key concepts like versions and parameters when using Midjourney. Versions refer to different variations of a design," />
      </div>
    </div>
  )
}

export default Obsviewsly