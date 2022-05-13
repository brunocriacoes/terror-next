import Link from 'next/link';

function SubMenu({categories, bgColor, color}) {
    return (
        <div 
        className="fixed top-20 p-5 rounded-lg"
        style={{
            backgroundColor: color,
            color: bgColor
        }}
        >
            {categories?.map((cat, i) =>
                <div key={cat.slug} className="font-TTHovesBold">
                    <Link href={`/categoria-produto/${cat.slug}`}>
                        <a>{cat.name}</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default SubMenu