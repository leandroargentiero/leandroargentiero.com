import * as TooltipPrimitive from '@radix-ui/react-tooltip';

interface ITooltip {
  content: string;
  side: any;
  children: React.ReactNode;
}
export const Tooltip = ({
  children,
  content,
  side = 'top',
  ...props
}: ITooltip) => {
  return (
    <TooltipPrimitive.Root delayDuration={0}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        side={side}
        align="center"
        {...props}
        className={`${
          side === 'top' ? '-translate-y-1' : 'translate-y-1'
        } rounded bg-gray-700 py-1 px-2 text-xs text-gray-100`}
      >
        {content}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
};
