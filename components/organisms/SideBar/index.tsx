import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

interface SideBarProps {
  activeMenu: 'transactions' | 'setting' | 'overview'
}

export default function SideBar(props : SideBarProps) {
  const { activeMenu } = props;
  const router = useRouter();
  const onLogout = () => {
    Cookies.remove('token');
    router.push('/sign-in');
  };
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="overview" icon="ic-menu-overview" href="/member" active={activeMenu === 'overview'} />
          <MenuItem title="Transactions" icon="ic-menu-transaction" href="/member/transactions" active={activeMenu === 'transactions'} />
          <MenuItem title="Messages" icon="ic-menu-message" href="/member" />
          <MenuItem title="Card" icon="ic-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="ic-menu-reward" href="/member" />
          <MenuItem title="Settings" icon="ic-menu-setting" href="/member/edit-profile" active={activeMenu === 'setting'} />
          <MenuItem title="Logout" icon="ic-menu-logout" onClick={onLogout} />
        </div>
        <Footer />
      </div>
    </section>

  );
}
