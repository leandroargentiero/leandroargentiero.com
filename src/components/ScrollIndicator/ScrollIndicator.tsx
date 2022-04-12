import { useScrollIndicator } from '@/hooks/useScrollIndicator';

export const ScrollIndicator = () => {
  const [state] = useScrollIndicator({ initialValue: 2 });

  return (
    <div
      className="h-1.5 bg-gradient-to-r from-pastel-indigo to-pastel-pink"
      style={{ width: state.value + '%' }}
    />
  );
};
