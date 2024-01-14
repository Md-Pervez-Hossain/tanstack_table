import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { RxChevronDown } from "react-icons/rx";
const DemoNavigationMenu = () => {
  return (
    <div className='w-9/12 mx-auto'>
      <NavigationMenu.Root>
        <NavigationMenu.List className=' flex items-center gap-5 text-xl justify-end'>
          <NavigationMenu.Item>
            <NavigationMenu.Link>
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link>
              About
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className='relative'>
            <NavigationMenu.Trigger className='flex items-center gap-2 group '>
              <span> Academic</span> <RxChevronDown className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className='bg-white shadow-2xl   rounded-2xl px-4 py-4  text-start absolute top-10 left-0 w-[300px]  '>
              <ul>
                <li>
                  <NavigationMenu.Link className="text-xl" href="/">
                    Morning Shift
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link className="text-xl " href="/">
                    Evening  Shift
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link className="text-xl " href="/">
                    Calender
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link className="text-xl " href="/">
                    UpComing Events
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link className="text-xl " href="/">
                    Notice Board
                  </NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link>
              Admission
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
};

export default DemoNavigationMenu;