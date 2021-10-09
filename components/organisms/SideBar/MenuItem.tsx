import cx from 'classnames';
import Image from 'next/image';

interface MenuItemProps {
  title: string;
  icon:
    | 'ic-menu-card'
    | 'ic-menu-logout'
    | 'ic-menu-message'
    | 'ic-menu-overview'
    | 'ic-menu-reward'
    | 'ic-menu-setting'
    | 'ic-menu-transaction';
    active?: boolean;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active } = props;
  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image
          src={`/icon/${icon}.svg`}
          height={25}
          width={25}
          alt="menu-overview"
        />
      </div>
      <p className="item-title m-0">
        <a href="/#" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
