
"use client"
import { useState } from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';

const Page = () => {

    const [menuWidth, setMenuWidth] = useState<number>(16);
    const [containerWidth, setContainerWidth] = useState<number>(82);
    const [isHide, setIsHide] = useState<boolean>(true);
    const [isArrow, setIsArrow] = useState<boolean>(false)
    const widthChange = () => {
        const newMenuWidth = menuWidth === 16 ? 4.5 : 16;
        const newMainWidth = 100 - newMenuWidth;

        setMenuWidth(newMenuWidth);
        setContainerWidth(newMainWidth);
        setIsHide(!isHide)
        setIsArrow(!isArrow)

    };



    return (
        <div className='w-full h-full flex'>

            <Menu menuWidth={menuWidth} isHide={isHide} isArrow={isArrow} widthChange={widthChange} />
            <div className='w-line h-full bg-gray-200'></div>
            <div style={{ width: `${containerWidth}% ` }} className='h-full '>
                <Header />
            </div>


        </div>
    );
};

export default Page;
