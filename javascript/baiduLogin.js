/**
 * Created by YANG on 15/10/10.
 */

$(document).ready(function(){

    //进入页面搜索框获得聚焦效果
    $('.searchInput').focus();

    /**
     * 使用了单例模式,好处是只生成一个实例，对方法和变量进行封装，不必担心生成多个实例，
     * 在整个系统的配置文件中，配置数据由一个单例对象进行统一读取和修改，其他对象需要配
     * 置数据的时候也统一通过该单例对象来获取配置数据。
     */
    //鼠标移动到登陆和设置处显示下拉菜单效果
    var selectDown = {
        navMenu:null,   //遍历获取当前菜单对象
        offsetX:0,      //获取菜单选项离屏幕左边位移
        eIndex:0,       //序列号状态变量
        init:function(){
            this.render();    //获取dom对象
            this.bind();      //绑定对象方法
        },
        render:function(){
            var single = this;
            single.menu = $('.nameNav')
        },
        bind:function(){
            var single = this;
            single.menu.each(function(index,value){
                $(value).mouseover(function(){
                    if(index != single.eIndex){
                        $('.loginMenu').eq(single.eIndex).css({
                            display:'none'
                        });
                        single.eIndex = index;
                    }
                    single.offsetX = $(value).get(0).offsetLeft-15;
                    single.navMenu = $('.loginMenu').eq(index);
                    single.navMenu.css({
                        display:'block',
                        left: single.offsetX
                    });
                }).mouseout(function(){
                    single.navMenu.css({
                            display:'none'
                        });
                    single.navMenu.mouseover(function(){
                        single.navMenu.css({
                            display:'block'
                        });
                    }).mouseleave(function(){
                        single.navMenu.css({
                            display:'none'
                        });
                    });
                });
            }); 
        }
    }

    selectDown.init();

    //鼠标移动到更多产品处显示下拉菜单效果
    var moreNavSelectDown = {
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            var single = this;
            single.menu = $('.moreNav')
        },
        bind:function(){
            var single = this;
            single.menu.mouseover(function(){
                console.info($(window).innerHeight());
                $('.moreNavMenu').css({
                    display:'block',
                    height:$(window).innerHeight()           //当前浏览器的高度
                }).mouseout(function(){
                    $('.moreNavMenu').mouseleave(function(){
                        $('.moreNavMenu').css({
                            display:'none'
                        });
                    });
                });
            });
        }
    }

    moreNavSelectDown.init();

    //鼠标划过设置按钮图标变换
    var navMenuOver = {
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            var single = this;
            single.mouse = $('.setting')
        },
        bind:function(){
            var single = this;
            single.mouse.mouseover(function(){
                $('.setting span').css({'background-position':'0 0'});
            }).mouseout(function(){
                $('.setting span').css({'background-position':'-22px 0'});
            });
        }
    }

    navMenuOver.init();

    //鼠标点击左边菜单栏右侧显示html页面
    $('.wrapMenus li').each(function(){
        $('.wrapMenus li').unbind('click').click(function() {
            $('.wrapMenusDemo').removeClass('wrapMenusDemo');
            $(this).addClass('wrapMenusDemo');
            $('.contentOn').removeClass('contentOn');
            $('.container1').eq($(this).index()).addClass('contentOn');
        });

    });

    //遍历菜单选项改变样式边框效果(nav div)
    $('.header1 a').each(function(){
        $('.header1 a').click(function(){
            $('.header1 .tabOn').removeClass('tabOn');
            $(this).addClass('tabOn');
            $('.contentOn1').removeClass('contentOn1');
            $('.article0').eq($(this).index()).addClass('contentOn1');
        });
    });

    //遍历图像导航选项边框样式改变效果(news div)
    $('.imgNav img').each(function(){
        $('.imgNav img').click(function(){
            $('.imgOn').removeClass('imgOn');
            $(this).addClass('imgOn');
            $('.imgPic img').attr('src',$(this).attr('src'));
        });
    });

    //遍历音乐类型选项改变样式边框效果(music div)
    $('.listBox a').each(function(){
        $('.listBox a').click(function(){
            $('.listOn').removeClass('listOn');
            $(this).addClass('listOn');
        });
    });

    //遍历菜单导航选项切换电影和动漫显示效果(vedio div)
    $('.header5 a').each(function(){
        $('.header5 a').click(function(){
            $('.activeOn').removeClass('activeOn');
            $(this).addClass('activeOn');
            $('.articleOn').removeClass('articleOn');
            $('.article5').eq($(this).index()).addClass('articleOn');
        });
    });
});
