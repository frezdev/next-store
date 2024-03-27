'use client'
import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames/bind'
import styles from './Description.module.sass'

const BLUR_IMAGE = 'data:image/webp;base64,UklGRpAEAABXRUJQVlA4WAoAAAAgAAAAZAAAZAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggogIAADAXAJ0BKmUAZQA+MRKHQqIhDG5fXBABglnCHABf6iFpDlZ33vFh55SehkT/gwNZx98ZkjnRTE7kNmSPPOvlAN7VrvCVCbheD89M58f91Key2STuQtdTyK0optjmLchqviXOwk6gTT/j22hF+WIDKIJ3rALUvfnWy/izPD68szIdcBXTSP+pISw/7TDkChmgHobRgd6L1Xoac+wOrRv7We5/R0BxoTNsXHoZv1orCbD4IpXaShuGvE8LJu0ESUG9huWAAP79VVRoYgxaLFyeyhXh+3crZ2TxrQIFHk5ZgVBNvcc0nxvvpWoDHmq4kiRi/Huy5Nc3IJDgY1uopOkKeL12YpdtLbHwd444GMpLfQyRtRjJlbGZj2a8fob8nQDM320wx3SynxW15sZjc0DYz8FxYU8cjWvB4hvb7Sk91DLQm1NvlCCukBWyiCBRaUBS1sm9/l2FPnH62aDq2HeZSGHfFOk/iac+UFD3mqqa0GRJ1ik1/cJk/m0pXBncvn6Y5u7VByEb0ndWYgxZgixcKY5eGqB1P6ZQ3bIdcowS+XZc+osKPUdS4GoOSRixxY0QDjvmoR9KAOUvo7jgP1wXLfENLg50rb6zpp3/P22gQ17m+4L2bxKaBQPm49RqdvtJ+svAPJV32NJ7we7Ind0LirC4Rt1oGbTUmRZYxip0GCjw38ly30iKP2xtUH40Mzo7jnAEhADcx2i/Pj/mOAx5jEo+FId2I4C/Az32W06KF0x+MwJGzNNXKWpoOoBWCM1NXSuO5n9rzy3N7yrsoufxWME/syqgIyWNZ0e8i8BYrsKwKobh/z+SYwBbce4zvK6bB1p86PO4xhjYFybE6ffYslLVCCJrn9HU2Auw0EAcgF9lPV68DxbwFu0ptVUpgUAAAAAA';

export function Description() {
  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = () => setHasBorder(!hasBorder);

  const ctx = classNames.bind(styles)

  const imgContainerStyles = ctx('description__imgContainer', {
    'description__imgContainer--border': hasBorder,
  })

  return (
    <section className={styles.description}>
      <figure onClick={handleClick} className={imgContainerStyles}>
        <Image
          placeholder='blur'
          blurDataURL={BLUR_IMAGE}
          src="/images/description.webp"
          alt="Mesa con varios productos futuristas"
          layout='fill'
        />
      </figure>
      <div className={styles.description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}