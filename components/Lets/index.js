import style from './style.module.css';
import Image from 'next/image';

export default function Lets() {
    return <>
        <div className="bg-bg-lets flex items-center justify-items-start bg-no-repeat bg-cover h-screen w-full">
            <div className="pl-5 lg:pl-20">
                <h1 className="block text-6xl lg:text-[300px] text-Light-Orange font-Beastly font-normal">let's</h1>
                <div className='text-xs lg:text-lg text-Light-Orange font-TTHoves uppercase font-normal'>
                    <span>
                        PRONTO PARA USO<br/>
                        É SÓ REGAR COM ÁGUA!
                    </span>
                </div>
                <h1 className="block text-6xl lg:text-[300px] text-Light-Orange font-Beastly font-normal">grooow</h1>
            </div>
        </div>
    </>
}