import Link from 'next/link';
import React from 'react'
import style from './style.module.css';

function SubMenu({categories}) {
    const base = process.env.NEXT_PUBLIC_URI;
    return (
        <div className={style.sub_menu_container}>
            {categories.map((cat, i) =>
                <div key={cat.slug} className={style.sub_menu_item}>
                    <Link href={base + '/categoria-produto/' + cat.slug}>
                        <a>{cat.name}</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default SubMenu