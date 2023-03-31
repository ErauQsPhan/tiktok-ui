import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import {
    CoinIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MarkIcon,
    MessageIcon,
    MoonIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Fonts';
import Image from '~/components/Image';
import Search from './Search';

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <MarkIcon />,
        title: 'Feadback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <MoonIcon />,
        title: 'Dark mode',
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View Profile',
            to: '/b.lan_anh',
        },
        {
            icon: <CoinIcon />,
            title: 'Get Coins',
            to: '/coins',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"></img>
                </div>

                <Search />
                {/* Search */}

                <div className={cx('actions')}>
                    <Button base leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faPlus}></FontAwesomeIcon>}>
                        <span>Upload</span>
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages" delay={200}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" delay={200}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="ttps://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-1/200589943_3541846406039637_3985123333451515740_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=C8lkPBWxiPgAX-iuEv3&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfB9xmyDaavAFKWZhxpRBGr6wjNTn7evMS_cYQf8lVP7Bg&oe=6445D03B"
                                className={cx('user-avatar')}
                                alt="Bui Lan Anh"
                                fallback="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-1/200589943_3541846406039637_3985123333451515740_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=C8lkPBWxiPgAX-iuEv3&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfB9xmyDaavAFKWZhxpRBGr6wjNTn7evMS_cYQf8lVP7Bg&oe=6445D03B"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
