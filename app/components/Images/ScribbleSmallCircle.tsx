import Image from 'next/image'
import ScribbleSmallCircle from '@public/assets/icons/scribble-small-circle.svg'

const ScribbleSmallCircleImage = () => {
    return (
        <>
            <Image
                src={ScribbleSmallCircle}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="hidden absolute inset-0 orange-color-filter dark:flex coffee:hidden"
                alt="small scribbled circle"
            />
            <Image
                src={ScribbleSmallCircle}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="flex absolute inset-0 black-color-filter dark:hidden coffee:hidden"
                alt="small scribbled circle"
            />
            <Image
                src={ScribbleSmallCircle}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="hidden absolute inset-0 coffee-color-filter dark:hidden coffee:flex"
                alt="small scribbled circle"
            />
        </>
    )
}

export default ScribbleSmallCircleImage
