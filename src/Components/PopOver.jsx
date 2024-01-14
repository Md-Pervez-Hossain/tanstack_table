import * as Popover from '@radix-ui/react-popover';

const PopOver = () => {
  return (
    <div>
      <Popover.Root>
        <Popover.Trigger className='text-[50px] font-bold'>Open Popover</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className='bg-blue-400 text-white p-5'>
            <h2>Hello Popover</h2>
            <Popover.Close />
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default PopOver;