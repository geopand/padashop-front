import Image from 'next/image';
import loader from '@/assets/loader.gif'


const LoadingPage = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: "100vw"
        }}>
            <Image
                width={150}
                height={150}
                alt='loader'
                src={loader} />
        </div>
    );
}

export default LoadingPage;