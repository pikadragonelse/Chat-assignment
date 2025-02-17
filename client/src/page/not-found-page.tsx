import { Button } from 'antd';

export const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-7xl font-bold text-zinc-600">404</h1>
      <p className="text-lg">Not found page</p>
      <Button href="/" className="mt-4 " type="primary">
        Come back home page
      </Button>
    </div>
  );
};
