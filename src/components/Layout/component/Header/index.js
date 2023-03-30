import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faGear,
    faCoins,
    faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { faMessage, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
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
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feadback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
    }, []);

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/b.lan_anh',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
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
                <HeadlessTippy
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1">
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItems name={'Bùi Lan Anh'} username={'b.lan_anh'} />
                                <AccountItems
                                    name={'Nguyễn Văn Hà'}
                                    username={'hacucsuc'}
                                    image={
                                        'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/322081168_1234604280735522_7897083785959710280_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L3QJLQtvO8sAX89jlxF&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfDLnJHo3edORuKdl2hU20P2T-7eM4S9Id2xiYgpZzJA-A&oe=64250E63'
                                    }
                                />
                                <AccountItems
                                    name={'Nguyễn Nhân'}
                                    username={'nhanle'}
                                    image={
                                        'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-1/282767100_106713548716835_510343169631571602_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=grflKPiAiukAX_7OCwE&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfBzQa-bA0sele5qGiKYoYTQtCTLOtQZSWuNoz4nLB-hRA&oe=6424C89D'
                                    }
                                />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    <Button base leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faPlus}></FontAwesomeIcon>}>
                        <span>Upload</span>
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages" delay={200}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faTelegram} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" delay={200}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
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
                            <img
                                src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-1/200589943_3541846406039637_3985123333451515740_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=C8lkPBWxiPgAX-iuEv3&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfB9xmyDaavAFKWZhxpRBGr6wjNTn7evMS_cYQf8lVP7Bg&oe=6445D03B"
                                className={cx('user-avatar')}
                                alt="Bui Lan Anh"
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
