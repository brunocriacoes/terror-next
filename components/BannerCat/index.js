export default function BannerCat({ img, name }) {
    return <>
        <div className="flex items-center justify-items-start bg-no-repeat bg-cover h-screen w-full" style={{
            backgroundImage: `url('${img}')`
        }}>
            <h1 className="block text-6xl lg:text-[300px] text-Light-Orange font-Beastly font-normal">{name}</h1>
        </div>
    </>

}