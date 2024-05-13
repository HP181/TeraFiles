/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'ucarecdn.com'
            }
        ],
        loader: "custom",
        loaderFile: './node_modules/@uploadcare/nextjs-loader/build/loader.js',
    }
};

export default nextConfig;
