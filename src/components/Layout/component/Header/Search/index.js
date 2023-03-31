import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/AccountItem';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
    }, []);
    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
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
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon> */}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
