window.__require = function t(e, o, n) {
    function i(s, c) {
        if (!o[s]) {
            if (!e[s]) {
                var r = s.split("/");
                if (r = r[r.length - 1],
                !e[r]) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l)
                        return l(r, !0);
                    if (a)
                        return a(r, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
            }
            var h = o[s] = {
                exports: {}
            };
            e[s][0].call(h.exports, function(t) {
                return i(e[s][1][t] || t)
            }, h, h.exports, t, e, o, n)
        }
        return o[s].exports
    }
    for (var a = "function" == typeof __require && __require, s = 0; s < n.length; s++)
        i(n[s]);
    return i
}({
    AdsManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6aaf984EV1Mg7W83TjEC21d", "AdsManager");
        var n = {
            showAd: function(e) {
				 var o = this;
				 //埋点 root vidoe
				 console.log("show video");
				 alert("video");
				 //播放完成： e.success(); 没有播放完成：e.failed()
				e.success();
				
				
              /*  var o = this;
                if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                    var n = "adunit-588e66b132810f53";
                    "undefined" != typeof tt && (n = "3j4805n43433n3xk45");
                    var i = wx.createRewardedVideoAd({
                        adUnitId: n
                    });
                    i.onError(function(t) {
                        console.log(t)
                    }),
                    i.show(),
                    i.onClose(function(n) {
                        console.log(n, 222),
                        n.isEnded ? (o.net = t("NetApi"),
                        o.net.adLog(1, {
                            success: function(t) {
                                cc.log(t)
                            },
                            failed: function(t, e) {
                                cc.log(t + "," + e)
                            }
                        }),
                        e.success()) : (o.net = t("NetApi"),
                        o.net.adLog(0, {
                            success: function(t) {
                                cc.log(t)
                            },
                            failed: function(t, e) {
                                cc.log(t + "," + e)
                            }
                        }),
                        e.failed()),
                        i.offClose(o)
                    })
                }*/
            }
        };
        e.exports = n,
        cc._RF.pop()
    }
    , {
        NetApi: "NetApi"
    }],
    Aim: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f8d948koodPh4qeo4wP85w0", "Aim"),
        cc.Class({
            extends: cc.Component,
            properties: {
                aimIcon: cc.Node
            },
            start: function() {
                cc.touchAim || (cc.touchAim = {
                    isTouch: !1,
                    touchPos: cc.v2(0, 0)
                }),
                this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this)
            },
            _onTouchStart: function(t) {
                cc.touchAim.isTouch = !0,
                this.aimIcon.active = !0,
                this.world = this.node.convertToNodeSpaceAR(cc.v2(0, 0));
                var e = t.touch._point;
                this.aimIcon.x = e.x + this.world.x,
                this.aimIcon.y = e.y + this.world.y,
                cc.touchAim.touchPos = cc.v2(this.aimIcon.x, this.aimIcon.y)
            },
            _onTouchEnd: function(t) {
                cc.touchAim.isTouch = !1,
                this.aimIcon.active = !1,
                this.aimIcon.x = this.world.x,
                this.aimIcon.y = this.world.y
            },
            _onTouchMove: function(t) {
                var e = t.touch._point
                  , o = e.x + this.world.x
                  , n = e.y + this.world.y;
                o < -540 || o > 540 || n < -this.node.height || n > 0 ? (this.aimIcon.active = !1,
                cc.touchAim.isTouch = !1) : (this.aimIcon.active = !0,
                cc.touchAim.isTouch = !0,
                cc.touchAim.touchPos = cc.v2(o, n)),
                this.aimIcon.x = o,
                this.aimIcon.y = n
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Animations: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "39a8fpAT5BFJJMnj1QHIioY", "Animations"),
        cc.Class({
            extends: cc.Component,
            properties: {
                animationType: 0
            },
            start: function() {
                switch (this.animationType) {
                case 1:
                    var t = cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.2), cc.scaleTo(1, .85)));
                    this.node.runAction(t)
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    AutoMegraDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "22d1epqunRO2oQbXfGzRXNG", "AutoMegraDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {},
            start: function() {
				
				var btn_watch_ad = cc.find("Animbody/btn_watch_ad", this.node);
				
				//埋点 激励用完隐藏。不用定时
				//btn_watch_ad.active = 0;
			},
            free: function() {
                var t = this;
                this.clickable && this.adsManager.showAd({
                    success: function() {
                        cc.MainGame.openAutoMegra(),
                        t.dismiss()
                    },
                    failed: function() {}
                })
            },
            star: function() {
                this.clickable && cc.MainGame.addStar(-3) && (cc.MainGame.openAutoMegra(),
                this.dismiss())
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    AutoMegra: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a49d5q8pRBEfqZ0BJX5DgwW", "AutoMegra");
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        cc.Class({
            extends: cc.Component,
            properties: {
                countDownLabel: cc.Label,
                positionNode: cc.Node
            },
            onLoad: function() {
                this.time = 0
            },
            start: function() {},
            freshAutoMegraCountDown: function() {
                var t = (Global.userData.autoMegraEndTime - Date.parse(new Date)) / 1e3;
                if (t > 0) {
                    var e = Math.floor(t / 60)
                      , o = t % 60;
                    this.countDownLabel.string = (e < 10 ? "0" + e : e) + ":" + (o < 10 ? "0" + o : o),
                    this.megra()
                } else
                    this.node.active = !1
            },
            megra: function() {
                for (var t = 0; t < this.positionNode.childrenCount; t++) {
                    var e = this.positionNode.children[t];
                    if (e.childrenCount > 0 && "cannon" === e.children[0].group)
                        for (var o = t + 1; o < this.positionNode.childrenCount; o++) {
                            var i = this.positionNode.children[o];
                            if (i.childrenCount > 0 && "cannon" === i.children[0].group) {
                                var a = function() {
                                    var t = e.children[0]
                                      , o = i.children[0];
                                    if (t.getComponent("Cannon").level < 30 && t.getComponent("Cannon").level == o.getComponent("Cannon").level) {
                                        var n = cc.moveBy(.3, t.parent.x - o.parent.x, t.parent.y - o.parent.y);
                                        n.easing(cc.easeBackIn());
                                        var a = cc.callFunc(function() {
                                            cc.cannonFactory.recycler(o),
                                            t.getComponent("Cannon").levelUp()
                                        })
                                          , s = cc.sequence(n, a);
                                        return o.runAction(s),
                                        {
                                            v: void 0
                                        }
                                    }
                                }();
                                if ("object" === (void 0 === a ? "undefined" : n(a)))
                                    return a.v
                            }
                        }
                }
            },
            update: function(t) {
                this.time += t,
                this.time > 1 && (this.time = 0,
                this.freshAutoMegraCountDown())
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BaseDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "85922v7c31MfJ1r5gjXKyNR", "BaseDialog");
        t("AdsManager");
        cc.Class({
            extends: t("BaseUtils"),
            properties: {},
            dismiss: function() {
                if (this.clickable) {
                    this.clickable = !1;
                    try {
                        this.onDismiss()
                    } catch (t) {}
                    var t = 0;
                    for (var e in this.node.children)
                        if ("DialogBg" !== this.node.children[e].name && "DialogBg2" !== this.node.children[e].name || (t = .3,
                        this.node.children[e].runAction(cc.fadeOut(.3))),
                        "Animbody" === this.node.children[e].name || "Seqanimbody" === this.node.children[e].name) {
                            t = .4;
                            var o = cc.scaleTo(t, 0);
                            o.easing(cc.easeBackIn()),
                            this.node.children[e].runAction(o)
                        }
                    this.scheduleOnce(function() {
                        cc.dialogManager.recycler(this.node)
                    }, t)
                }
            },
            show: function(e) {
                var o = this;
                this.clickable = !0;
                try {
                    this.onShow()
                } catch (t) {}
                null != this.node.parent && cc.dialogManager.recycler(this.node),
                this.adsManager = t("AdsManager"),
                e.addChild(this.node);
                var n = function(t) {
                    if ("DialogBg" === o.node.children[t].name ? (o.node.children[t].opacity = 0,
                    o.node.children[t].runAction(cc.fadeTo(.3, 200))) : "DialogBg2" === o.node.children[t].name && (o.node.children[t].opacity = 0,
                    o.node.children[t].runAction(cc.fadeIn(.3))),
                    "Animbody" === o.node.children[t].name) {
                        o.node.children[t].scaleX = 0,
                        o.node.children[t].scaleY = 0;
                        var e = cc.scaleTo(.5, 1);
                        e.easing(cc.easeElasticOut()),
                        o.node.children[t].runAction(e)
                    } else
                        "Seqanimbody" === o.node.children[t].name && function() {
                            var e = function(e) {
                                o.node.children[t].scaleX = 1,
                                o.node.children[t].scaleY = 1,
                                o.node.children[t].children[e].scaleX = 0,
                                o.node.children[t].children[e].scaleY = 0,
                                o.node.children[t].children[e].stopAllActions(),
                                o.scheduleOnce(function() {
                                    var o = cc.scaleTo(.6, 1);
                                    o.easing(cc.easeElasticOut()),
                                    this.node.children[t].children[e].runAction(o)
                                }, .1 * e)
                            };
                            for (var n in o.node.children[t].children)
                                e(n)
                        }()
                };
                for (var i in this.node.children)
                    n(i)
            },
            setArgs: function(t) {
                this.args = t
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {
        AdsManager: "AdsManager",
        BaseUtils: "BaseUtils"
    }],
    BaseUtils: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "841f8s3+hhHFr9Uerv0T2my", "BaseUtils"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            formatScore: function(t) {
                for (var e = t, o = "", n = 0; e >= 1e6; )
                    n++,
                    e /= 1e3;
                try {
                    o = ["", "K", "M", "B", "T", "F", "A", "C", "D", "Y", "S"][n]
                } catch (t) {}
                return (e = parseInt(e)) + o
            },
            formatScore2: function(t) {
                for (var e = t, o = "", n = 0; e >= 1e3; )
                    n++,
                    e /= 1e3;
                try {
                    o = ["", "K", "M", "B", "T", "F", "A", "C", "D", "Y", "S"][n]
                } catch (t) {}
                return (e = parseInt(e)) + o
            },
            getTodayDate: function() {
                var t = new Date
                  , e = t.getFullYear()
                  , o = t.getMonth() + 1
                  , n = t.getDate();
                return parseInt(e + "" + (o < 10 ? "0" + o : o) + (n < 10 ? "0" + n : n))
            },
            startScene: function(t, e) {
                var o = cc.callFunc(function() {
                    cc.director.loadScene(t)
                });
                e || (e = cc.sequence(cc.fadeOut(.4), o)),
                this.node.runAction(e)
            },
            showToast: function(e) {
                t("Toast").show(e)
            }
        }),
        cc._RF.pop()
    }
    , {
        Toast: "Toast"
    }],
    BoxFactory: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ee8effb6MJGP4d1sgTCCiT8", "BoxFactory"),
        cc.Class({
            extends: cc.Component,
            properties: {
                boxPrefab: cc.Prefab,
                boxsParentNode: cc.Node
            },
            initPool: function() {
                this.pool = new cc.NodePool("Box");
                for (var t = 0; t < this.defaultPoolSize; t++) {
                    var e = cc.instantiate(this.boxPrefab);
                    this.pool.put(e)
                }
            },
            createrStartBoxs: function() {
                for (var t = 0; t < 4; t++)
                    this.createrLineBoxs(-140 * t)
            },
            createrLineBoxs: function(t) {
                var e = 3 + Math.floor(5 * Math.random())
                  , o = [];
                for (var n in o = this.getRandomNum(o, e)) {
                    var i = this.getBoxByLevel(Global.userData.promotion, o[n], t);
                    this.boxsParentNode.addChild(i)
                }
            },
            getBoxByLevel: function(t, e, o) {
                if (null != this.pool) {
                    var n = void 0;
                    (n = this.pool.size() > 0 ? this.pool.get(this.pool) : cc.instantiate(this.boxPrefab)).getComponent("Box").setConfig(t - 1, e, o);
                    var i = -this.parentHeight - o + 140
                      , a = cc.moveBy(-i / 70, 0, i);
                    return n.runAction(cc.repeatForever(a)),
                    n
                }
                cc.log("BoxFactory \u672a\u521d\u59cb\u5316")
            },
            getRandomNum: function(t, e) {
                for (; t.length < e; ) {
                    var o = Math.floor(7 * Math.random());
                    -1 == t.indexOf(o) && t.push(o)
                }
                return t
            },
            start: function() {
                this.canClear = !0,
                this.initGameState()
            },
            initGameState: function() {
                this.scheduleOnce(function() {
                    this.parentHeight = this.boxsParentNode.height,
                    this.initPool(),
                    this.gaming = !0,
                    this.createrStartBoxs(),
                    this.schedule(function() {
                        this.createrLineBoxs(0)
                    }, 2)
                }, .05)
            },
            recycler: function(t) {
                t.getComponent("Box").isTarget = !1,
                t.stopAllActions(),
                this.pool.put(t)
            },
            clearAllBoxs: function() {
                for (cc.MainGame.cameraShake(5); this.boxsParentNode.childrenCount > 0; ) {
                    var t = this.boxsParentNode.children[0];
                    t.getComponent("Box").toSavingPot(),
                    Math.random() > .7 && (cc.MainGame.coinStarAnim.AddGoldAnim(cc.v2(t.x, t.y), 2),
                    cc.MainGame.coinStarAnim.addPatchAnim(cc.v2(t.x, t.y))),
                    this.recycler(t)
                }
                cc.MainGame.saveUserData(),
                this.scheduleOnce(function() {
                    this.canClear = !0
                }, 1),
                cc.MainGame.resetProgress()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Box: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "25589LrM+1L8bDJw8pePdLB", "Box"),
        cc.Class({
            extends: t("BaseUtils"),
            properties: {
                num: cc.Label,
                type: 0,
                boxSpriteFrames: [cc.SpriteFrame],
                boxSprite: cc.Node
            },
            setConfig: function(t, e, o) {
                this.type = 0;
                var n = 10 + 5 * Math.pow(3.5, t)
                  , i = 20 + 15 * Math.pow(3.5, t);
                this.hp = Math.floor(n + Math.random() * (i - n)),
                this.score = this.hp * Math.pow(1.2, t),
                this.num.string = this.formatScore2(this.hp),
                this.node.x = [-420, -280, -140, 0, 140, 280, 420][e],
                this.node.y = o,
                this.node.scaleX = 1,
                this.node.scaleY = 1
            },
            setExploreConfig: function(t, e, o) {
                var n = 100 * Math.random;
                this.type = n > 5 ? 0 : 1;
                var i = 10 + 5 * Math.pow(1.86, t)
                  , a = 20 + 15 * Math.pow(1.86, t);
                this.hp = Math.floor(i + Math.random() * (a - i)),
                this.score = this.hp,
                this.num.string = this.formatScore2(this.hp),
                this.node.x = [-420, -280, -140, 0, 140, 280, 420][e],
                this.node.y = o,
                this.node.scaleX = 1,
                this.node.scaleY = 1,
                0 == this.type || this.type
            },
            attacked: function(t) {
                this.hp -= t,
                this.hp <= 0 ? (cc.boxFactory.recycler(this.node),
                cc.MainGame.addScore(3 * this.score * (null != cc.MainGame.coinRainNode && cc.MainGame.coinRainNode.active ? 5 : 1)),
                cc.MainGame.breakBox(this.node)) : (0 == this.boxSprite.getNumberOfRunningActions() && this.boxSprite.runAction(cc.sequence(cc.scaleTo(.05, 1.1), cc.scaleTo(.05, 1))),
                this.num.string = this.formatScore2(this.hp))
            },
            toSavingPot: function() {
                Global.userData.savingPotCoinCount += this.score * (null != cc.MainGame.coinRainNode && cc.MainGame.coinRainNode.active ? 5 : 1)
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {
        BaseUtils: "BaseUtils"
    }],
    BulletFactory: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "603b452uiFNBrjOoc9IgMTc", "BulletFactory"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bulletPrefab: cc.Prefab,
                defaultPoolSize: 200,
                bulletFrames: [cc.SpriteFrame]
            },
            initPool: function() {
                this.pool = new cc.NodePool("Bullet");
                for (var t = 0; t < this.defaultPoolSize; t++) {
                    var e = cc.instantiate(this.bulletPrefab);
                    this.pool.put(e)
                }
            },
            getBulletByLevel: function(t, e) {
                if (null != this.pool) {
                    var o = void 0;
                    return (o = this.pool.size() > 0 ? this.pool.get(this.pool) : cc.instantiate(this.bulletPrefab)).x = 0,
                    o.y = 0,
                    o.getComponent("Bullet").setConfig(t, e),
                    o.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 1e3),
                    o
                }
                cc.log("BulletFactory \u672a\u521d\u59cb\u5316")
            },
            recycler: function(t) {
                t.children[0].angle = 0,
                this.pool.put(t)
            },
            start: function() {
                this.initPool()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Bullet: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "61ed5Mno3NGQJk02KrVTBMc", "Bullet"),
        cc.Class({
            extends: cc.Component,
            properties: {
                sprite: cc.Node
            },
            setConfig: function(t, e) {
                this.sprite.getComponent(cc.Sprite).spriteFrame = cc.bulletFactory.bulletFrames[t - 1],
                this.attack = e,
                this.func = function() {
                    cc.bulletFactory.recycler(this.node)
                }
                ,
                this.scheduleOnce(this.func, 5)
            },
            onBeginContact: function(t, e, o) {
                switch (o.tag) {
                case 1:
                    o.node.getComponent("Box").attacked(Math.floor(this.attack * Global.userData.attackByPromotionUp * Global.userData.attacKByVip));
                    break;
                case 3:
                    this.unschedule(this.func),
                    cc.bulletFactory.recycler(e.node);
                    break;
                default:
                    this.setSpeedByrotation()
                }
            },
            onEndContact: function(t, e, o) {
                if (3 != o.tag) {
                    var n = this.getRotationBySpeed(e.body.linearVelocity);
                    e.node.children[0].angle = -(n + this.node.angle)
                }
            },
            setSpeedByrotation: function() {},
            getRotationBySpeed: function(t) {
                var e = t.x
                  , o = t.y
                  , n = 180 * Math.atan(0 == o ? 0 : e / o) / Math.PI;
                return o < 0 && (n += 180),
                n
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    CannonDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "20c35NGoU5ODoO4hKk3kD6Z", "CannonDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                icon: cc.Node,
                speedProgressBar: cc.ProgressBar,
                attackProgressBar: cc.ProgressBar
            },
            start: function() {},
            onShow: function() {
                this.config = cc.cannonFactory.config[this.args],
                this.icon.getComponent(cc.Sprite).spriteFrame = cc.cannonFactory.cannonFrames[this.args],
                this.speedProgressBar.progress = .05 / this.config.fireInterval,
                this.attackProgressBar.progress = Math.sqrt(this.config.attack) / 1e3,
                cc.MainGame.setNextPrice()
            },
            receiveStar: function() {
                this.clickable && (cc.MainGame.addStar(3),
                this.dismiss())
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    CannonFactory: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "cee9ddOdnlF6rIAkkz5v0rH", "CannonFactory"),
        cc.Class({
            extends: cc.Component,
            properties: {
                cannonPrefab: cc.Prefab,
                defaultPoolSize: 30,
                cannonJson: cc.JsonAsset,
                cannonFrames: [cc.SpriteFrame]
            },
            start: function() {
                this.setJsonConfig(this.cannonJson)
            },
            setJsonConfig: function(t) {
                this.config = t.json.cannons,
                this.initPool()
            },
            initPool: function() {
                this.pool = new cc.NodePool("Cannon");
                for (var t = 0; t < this.defaultPoolSize; t++) {
                    var e = cc.instantiate(this.cannonPrefab);
                    this.pool.put(e)
                }
            },
            getCannonByLevel: function(t) {
                if (null != this.pool) {
                    var e = void 0;
                    return (e = this.pool.size() > 0 ? this.pool.get(this.pool) : cc.instantiate(this.cannonPrefab)).getComponent("Cannon").setConfig(t),
                    e
                }
                cc.log("CannonFactory \u672a\u521d\u59cb\u5316")
            },
            recycler: function(t) {
                t.stopAllActions(),
                cc.MainGame.savePosition(0, t),
                this.pool.put(t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Cannon: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9dede1SR4VGsJthDEeAXK+p", "Cannon"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bulletSpeed: 3e3,
                sound: {
                    type: cc.AudioSource,
                    default: null
                }
            },
            setConfig: function(t) {
                this.node.scaleX = 0,
                this.node.scaleY = 0,
                this.inited = !0,
                this.level = t,
                this.config = cc.cannonFactory.cannonJson.json.cannons[this.level - 1],
                this.node.getComponent(cc.Sprite).spriteFrame = cc.cannonFactory.cannonFrames[this.level - 1];
                var e = cc.scaleTo(.3, 1);
                e.easing(cc.easeBackOut()),
                this.node.runAction(e)
            },
            setExploreConfig: function() {
                this.isExplore = !0
            },
            onLoad: function() {
                this.time = 0
            },
            start: function() {
                this.inited || cc.log("\u672a\u521d\u59cb\u5316\u70ae\u53f0")
            },
            update: function(t) {
                this.isExplore ? this.exploreCannonUpdate(t) : this.normalCannonUpdate(t)
            },
            normalCannonUpdate: function(t) {
                if (this.time += t,
                cc.touchAim.isTouch && this.position <= 4) {
                    this.node.stopAllActions(),
                    this.targetNode = null;
                    var e = this.getTargetRotation(cc.touchAim.touchPos, this.node.parent);
                    this.node.angle = -e
                }
                if (this.inited && this.time > this.config.fireInterval / cc.MainGame.getSpeed()) {
                    if (this.time = 0,
                    cc.MainGame.pause)
                        return;
                    if (!this.fire)
                        return;
                    if (this.position = this.node.parent.getComponent("Position").position,
                    this.position > 4)
                        return;
                    cc.touchAim.isTouch || (void 0 === this.targetNode || null === this.targetNode ? this.findTarget() : this.targetNode.getComponent("Box").isTarget || this.findTarget());
                    for (var o = 0; o < this.config.bulletCount; o++) {
                        var n = cc.bulletFactory.getBulletByLevel(this.level, this.config.attack)
                          , i = -this.node.angle;
                        this.setSpeedByrotation(i, n, this.bulletSpeed * (60 / cc.gameFrame)),
                        n.x = this.config.bulletPosX[o],
                        n.y = this.node.height / 2 + this.config.bulletPosY[o],
                        n.angle = 0,
                        this.node.addChild(n),
                        n.parent = this.node.parent.parent,
                        n.setSiblingIndex(0)
                    }
                    this.playSound()
                }
            },
            exploreCannonUpdate: function(t) {
                if (this.time += t,
                cc.touchAim.isTouch) {
                    this.node.stopAllActions(),
                    this.targetNode = null;
                    var e = this.getTargetRotation(cc.touchAim.touchPos, this.node.parent);
                    this.node.angle = -e
                }
                if (this.inited && this.time > this.config.fireInterval) {
                    this.time = 0;
                    for (var o = 0; o < this.config.bulletCount; o++) {
                        var n = cc.bulletFactory.getBulletByLevel(this.level, this.config.attack)
                          , i = -this.node.angle;
                        this.setSpeedByrotation(i, n, this.bulletSpeed),
                        n.x = this.config.bulletPosX[o],
                        n.y = this.node.height / 2 + this.config.bulletPosY[o],
                        n.angle = 0,
                        this.node.addChild(n),
                        n.parent = this.node.parent.parent,
                        n.setSiblingIndex(0)
                    }
                    this.playSound()
                }
            },
            findTarget: function() {
                var t = cc.boxFactory.boxsParentNode.children;
                if (0 != t.length) {
                    var e = 1e6
                      , o = 0;
                    for (var n in t) {
                        var i = t[n]
                          , a = i.x - this.node.parent.x
                          , s = i.y - this.node.parent.y
                          , c = Math.sqrt(a * a + s * s);
                        c < e && (e = c,
                        o = n)
                    }
                    this.targetNode = t[o],
                    this.targetNode.getComponent("Box").isTarget = !0;
                    var r = this.getTargetRotation(this.targetNode, this.node.parent);
                    this.node.runAction(cc.rotateTo(.5, r))
                }
            },
            setSpeedByrotation: function(t, e, o) {
                var n = Math.sin(t * Math.PI / 180)
                  , i = Math.cos(t * Math.PI / 180);
                e.getComponent(cc.RigidBody).linearVelocity = cc.v2(o * n, o * i)
            },
            getTargetRotation: function(t, e) {
                var o = t.x - e.x
                  , n = t.y - e.y
                  , i = 180 * Math.atan(0 == n ? 0 : o / n) / Math.PI;
                return n < 0 && (i += 180),
                i
            },
            stopFire: function() {
                this.fire = !1;
                try {
                    this.targetNode.getComponent("Box").isTarget = !1
                } catch (t) {}
            },
            startFire: function() {
                this.fire = !0
            },
            levelUp: function() {
                var t = this
                  , e = cc.callFunc(function() {
                    t.setConfig(++t.level),
                    cc.MainGame.savePosition(1, t.node),
                    t.level > Global.userData.maxLevel && cc.MainGame.maxLevelChanged(t.level)
                })
                  , o = cc.sequence(cc.scaleTo(.05, 0), e, cc.scaleTo(.15, 1));
                this.node.runAction(o)
            },
            playSound: function() {
                Global.userConfig.isSound && this.sound.play()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ChallengeDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "68d6eF/fW9AnJZnfH5UzNjW", "ChallengeDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {},
            start: function() {},
            watchVideoToPlay: function() {
                var t = this;
                this.clickable && this.adsManager.showAd({
                    success: function() {
                        t.startScene("ExploreGame", null)
                    },
                    failed: function() {}
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    CoinRain: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0d8fauzyYhMFZg4k3Za4PKz", "CoinRain"),
        cc.Class({
            extends: cc.Component,
            properties: {
                coin: cc.Prefab
            },
            onLoad: function() {
                this.time = 0
            },
            start: function() {},
            initPool: function() {
                if (!this.pool) {
                    this.pool = new cc.NodePool("Coin");
                    for (var t = 0; t < 30; t++) {
                        var e = cc.instantiate(this.coin);
                        this.pool.put(e)
                    }
                }
            },
            show: function() {
                this.node.active = !0
            },
            dismiss: function() {
                this.node.active = !1
            },
            addCoin: function() {
                this.pool || this.initPool();
                var t = void 0;
                (t = this.pool.size() > 0 ? this.pool.get(this.pool) : cc.instantiate(this.coin)).x = 1080 * Math.random() - 540,
                t.y = 0,
                this.node.addChild(t);
                var e = this
                  , o = cc.callFunc(function() {
                    e.pool.put(t)
                })
                  , n = cc.moveBy(.4 + .5 * Math.random(), 0, -2500);
                t.runAction(cc.sequence(n, o))
            },
            update: function(t) {
                if (this.time += t,
                this.time > .2) {
                    this.time = 0;
                    var e = Date.parse(new Date);
                    Global.userData.fiveTimesIncomeEndTime > e ? this.addCoin() : this.dismiss()
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    CoinStarAnim: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0194e+p7hhNr6lWBxaNJLgb", "CoinStarAnim"),
        cc.Class({
            extends: cc.Component,
            properties: {
                gold: cc.Prefab,
                star: cc.Prefab,
                boxPatch: cc.Prefab
            },
            start: function() {
                this.goldPool = new cc.NodePool("gold"),
                this.starPool = new cc.NodePool("star"),
                this.boxPatchPool = new cc.NodePool("boxPatch");
                for (var t = 0; t < 50; t++)
                    this.goldPool.put(cc.instantiate(this.gold)),
                    this.starPool.put(cc.instantiate(this.star)),
                    this.boxPatchPool.put(cc.instantiate(this.boxPatch))
            },
            addPatchAnim: function(t) {
                for (var e = this, o = this, n = 2 + Math.floor(2 * Math.random()), i = function(n) {
                    var i = e.getPatch();
                    i.x = t.x,
                    i.y = t.y,
                    e.node.addChild(i);
                    var a = .3 + .7 * Math.random()
                      , s = cc.moveBy(a, 1e3 * Math.random() - 500, 1e3 * Math.random() - 500)
                      , c = cc.fadeOut(a)
                      , r = cc.rotateBy(a, 1440 * Math.random() - 720)
                      , l = cc.spawn(s, c, r);
                    l.easing(cc.easeSineOut());
                    var h = cc.callFunc(function() {
                        o.recyclerPatch(i)
                    })
                      , u = cc.sequence(l, h);
                    i.runAction(u)
                }, a = 0; a < n; a++)
                    i()
            },
            AddGoldAnim: function(t, e) {
                var o = this
                  , n = this
                  , i = 2 + Math.floor(2 * Math.random())
                  , a = void 0;
                switch (e) {
                case 1:
                    a = cc.v2(0, 75);
                    break;
                case 2:
                    a = cc.v2(-326, 75);
                    break;
                default:
                    a = cc.v2(0, 75)
                }
                for (var s = function(e) {
                    var i = .6 + .4 * Math.random()
                      , s = o.getGold();
                    null == t ? (s.x = 0,
                    s.y = -600,
                    i *= 1.5) : (s.x = t.x,
                    s.y = t.y),
                    o.node.addChild(s),
                    r = [cc.v2(s.x, s.y), cc.v2(s.x - 400 + 800 * Math.random(), s.y - 400 + 800 * Math.random()), a],
                    (l = cc.bezierTo(i, r)).easing(cc.easeSineOut());
                    var c = cc.fadeOut(i)
                      , h = cc.spawn(l, c)
                      , u = cc.callFunc(function() {
                        n.recyclerGold(s)
                    });
                    s.runAction(cc.sequence(h, u))
                }, c = 0; c < i; c++) {
                    var r, l;
                    s()
                }
            },
            addStarAnim: function(t) {
                for (var e = this, o = this, n = 4 + Math.floor(6 * Math.random()), i = cc.v2(258, 75), a = function(n) {
                    var a = 1 + .4 * Math.random()
                      , s = e.getStar();
                    null == t ? (s.x = 0,
                    s.y = -600,
                    a *= 1.5) : (s.x = t.x,
                    s.y = t.y),
                    e.node.addChild(s),
                    c = [cc.v2(s.x, s.y), cc.v2(s.x - 400 + 800 * Math.random(), s.y - 400 + 800 * Math.random()), i],
                    (r = cc.bezierTo(a, c)).easing(cc.easeSineOut());
                    var l = cc.fadeTo(a, 100)
                      , h = cc.spawn(r, l)
                      , u = cc.callFunc(function() {
                        o.recyclerStar(s)
                    });
                    s.runAction(cc.sequence(h, u))
                }, s = 0; s < n; s++) {
                    var c, r;
                    a()
                }
            },
            getPatch: function() {
                var t = void 0;
                (t = this.boxPatchPool.size() > 0 ? this.boxPatchPool.get(this.boxPatchPool) : cc.instantiate(this.boxPatch)).opacity = 255;
                var e = 1 + 3 * Math.random();
                return t.scaleX = e,
                t.scaleY = e,
                t
            },
            getGold: function() {
                var t = void 0;
                return (t = this.goldPool.size() > 0 ? this.goldPool.get(this.goldPool) : cc.instantiate(this.gold)).opacity = 255,
                t
            },
            getStar: function() {
                var t = void 0;
                return (t = this.starPool.size() > 0 ? this.starPool.get(this.starPool) : cc.instantiate(this.star)).opacity = 255,
                t
            },
            recyclerGold: function(t) {
                this.goldPool.put(t)
            },
            recyclerStar: function(t) {
                this.starPool.put(t)
            },
            recyclerPatch: function(t) {
                this.boxPatchPool.put(t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ConfirmDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "10ccbYx4dVM5oGG6/Krpt8i", "ConfirmDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                title: cc.Label
            },
            start: function() {},
            onShow: function() {
                this.title.string = this.args.title
            },
            confirm: function() {
                this.clickable && (this.args.confirm(),
                this.dismiss())
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    DialogManager2: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "220fenI5LVGlqcypWs8lOpm", "DialogManager2");
        var n = {
            dialogNode: null,
            pool: new Array,
            showGameDialogByArgs: function(t, e) {
                this.args = e,
                this.showGameDialog(null, t)
            },
            showGameDialog: function(t, e) {
                null == this.dialogNode && cc.log("dialogNode\u4e3aNull");
                var o = void 0
                  , n = this
                  , i = !0
                  , a = !1
                  , s = void 0;
                try {
                    for (var c, r = this.pool[Symbol.iterator](); !(i = (c = r.next()).done); i = !0) {
                        var l = c.value;
                        l.name === e && (o = l)
                    }
                } catch (t) {
                    a = !0,
                    s = t
                } finally {
                    try {
                        !i && r.return && r.return()
                    } finally {
                        if (a)
                            throw s
                    }
                }
                null == o ? cc.loader.loadRes("prefabs/" + e, function(t, i) {
                    o = cc.instantiate(i),
                    n.pool.push(o),
                    n.showDialog(e, o)
                }) : this.showDialog(e, o)
            },
            showDialog: function(t, e) {
                null != this.args && (e.getComponent(t).setArgs(this.args),
                this.args = null),
                e.getComponent(t).show(this.dialogNode)
            },
            start: function() {},
            recycler: function(t) {
                t.parent = null
            },
            isOtherDialogShowing: function() {
                return this.dialogNode.childrenCount > 0
            }
        };
        e.exports = n,
        cc._RF.pop()
    }
    , {}],
    DialogManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1fedfeMpBJJjIuckRIWzR1P", "DialogManager"),
        cc.Class({
            extends: cc.Component,
            properties: {
                receiveStarDialog: cc.Prefab,
                storeDialog: cc.Prefab,
                offlineDialog: cc.Prefab,
                signDialog: cc.Prefab,
                turntableDialog: cc.Prefab,
                levelDialog: cc.Prefab,
                settingDialog: cc.Prefab,
                goldDialog: cc.Prefab,
                turntableResultDialog: cc.Prefab,
                promotionUpDialog: cc.Prefab,
                promotionAnimDialog: cc.Prefab,
                giftDialog: cc.Prefab,
                cannonDialog: cc.Prefab,
                speedUpDialog: cc.Prefab,
                autoMegraDialog: cc.Prefab,
                gifBoxDialog: cc.Prefab,
                confirmDialog: cc.Prefab,
                dialogNode: cc.Node
            },
            showGameDialogByArgs: function(t, e) {
                this.args = e,
                this.showGameDialog(null, t)
            },
            showGameDialog: function(t, e) {
                var o = void 0
                  , n = void 0
                  , i = void 0;
                switch (e) {
                case "receiveStar":
                    n = this.receiveStarDialog,
                    i = "receiveStarDialog";
                    break;
                case "store":
                    n = this.storeDialog,
                    i = "StoreDialog";
                    break;
                case "offline":
                    n = this.offlineDialog,
                    i = "OfflineDialog";
                    break;
                case "sign":
                    n = this.signDialog,
                    i = "SignDialog";
                    break;
                case "setting":
                    n = this.settingDialog,
                    i = "SettingDialog";
                    break;
                case "turntable":
                    n = this.turntableDialog,
                    i = "TurntableDialog";
                    break;
                case "turntableResult":
                    n = this.turntableResultDialog,
                    i = "TurntableResultDialog";
                    break;
                case "gold":
                    n = this.goldDialog,
                    i = "GoldDialog";
                    break;
                case "level":
                    n = this.levelDialog,
                    i = "LevelDialog";
                    break;
                case "setting":
                    n = this.settingDialog,
                    i = "SettingDialog";
                    break;
                case "gold":
                    n = this.goldDialog,
                    i = "GoldDialog";
                    break;
                case "promotion":
                    n = this.promotionUpDialog,
                    i = "PromotionDialog";
                    break;
                case "promotionAnim":
                    n = this.promotionAnimDialog,
                    i = "PromotionAnimDialog";
                    break;
                case "gift":
                    n = this.giftDialog,
                    i = "GiftDialog";
                    break;
                case "cannon":
                    n = this.cannonDialog,
                    i = "CannonDialog";
                    break;
                case "speedUp":
                    n = this.speedUpDialog,
                    i = "SpeedUpDialog";
                    break;
                case "auto":
                    n = this.autoMegraDialog,
                    i = "AutoMegraDialog";
                    break;
                case "giftBox":
                    n = this.gifBoxDialog,
                    i = "GiftBoxDialog";
                    break;
                case "confirm":
                    n = this.confirmDialog,
                    i = "ConfirmDialog"
                }
                var a = !0
                  , s = !1
                  , c = void 0;
                try {
                    for (var r, l = this.pool[Symbol.iterator](); !(a = (r = l.next()).done); a = !0) {
                        var h = r.value;
                        h.name === i && (o = h)
                    }
                } catch (t) {
                    s = !0,
                    c = t
                } finally {
                    try {
                        !a && l.return && l.return()
                    } finally {
                        if (s)
                            throw c
                    }
                }
                null == o && (o = cc.instantiate(n),
                this.pool.push(o)),
                null != o && (null != this.args && (o.getComponent(i).setArgs(this.args),
                this.args = null),
                o.getComponent(i).show(this.dialogNode))
            },
            loadPrefab: function(t, e) {
                var o = this;
                cc.loader.loadRes("prefabs/" + t, function(e, n) {
                    var i = cc.instantiate(n);
                    null != o.args && (i.getComponent(t).setArgs(o.args),
                    o.args = null),
                    i.getComponent(t).show(o.dialogNode),
                    o.dialogs.push(i)
                })
            },
			onLoad:function(){
				this.autoAdapteScreen();
			},
			autoAdapteScreen:function(){
				// 适配解决方案
				let _canvas = cc.Canvas.instance;
			// 设计分辨率比
				let _rateR = _canvas.designResolution.height/_canvas.designResolution.width;
			// 显示分辨率比
				let _rateV = cc.winSize.height/cc.winSize.width;
				console.log("winSize: rateR: "+_rateR+" rateV: "+_rateV);
				if (_rateV > _rateR)
				{
					_canvas.fitHeight = false;
					_canvas.fitWidth = true;
					console.log("winSize: fitWidth");
				}
				else
				{
					_canvas.fitHeight = true;
					_canvas.fitWidth = false;
					console.log("winSize: fitHeight");
				}
			},
            start: function() {
                this.dialogsPool = new Array,
                this.pool = new Array
            },
            recycler: function(t) {
                t.parent = null
            },
            isOtherDialogShowing: function() {
                return this.dialogNode.childrenCount > 0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ExploreBoxFactory: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1ebc5cbfOhN1bzYbTmANN/l", "ExploreBoxFactory"),
        cc.Class({
            extends: cc.Component,
            properties: {
                boxPrefab: cc.Prefab,
                boxsParentNode: cc.Node,
                boxConfig: cc.JsonAsset
            },
			onLoad:function(){
				this.autoAdapteScreen();
			},
			autoAdapteScreen:function(){
				// 适配解决方案
				let _canvas = cc.Canvas.instance;
			// 设计分辨率比
				let _rateR = _canvas.designResolution.height/_canvas.designResolution.width;
			// 显示分辨率比
				let _rateV = cc.winSize.height/cc.winSize.width;
				console.log("winSize: rateR: "+_rateR+" rateV: "+_rateV);
				if (_rateV > _rateR)
				{
					_canvas.fitHeight = false;
					_canvas.fitWidth = true;
					console.log("winSize: fitWidth");
				}
				else
				{
					_canvas.fitHeight = true;
					_canvas.fitWidth = false;
					console.log("winSize: fitHeight");
				}
			},
            start: function() {
                this.canClear = !0,
                this.initGameState()
            },
            setGame: function(t) {
                this.game = t
            },
            initGameState: function() {
                this.scheduleOnce(function() {
                    this.parentHeight = this.boxsParentNode.height
                }, .05);
                var t = Math.floor(4 + this.level / 6);
                this.schedule(function() {
                    this.createrLineBoxs(0)
                }, 2, t, 0)
            },
            setLevel: function(t) {
                this.level = t
            },
            createrLineBoxs: function(t) {
                var e = 3;
                this.level > 2 && (e = 4);
                var o = e + Math.floor(3 * Math.random())
                  , n = [];
                for (var i in n = this.getRandomNum(n, o)) {
                    var a = this.getBoxByLevel(this.level, n[i], t);
                    this.boxsParentNode.addChild(a)
                }
            },
            getBoxByLevel: function(t, e, o) {
                var n = cc.instantiate(this.boxPrefab);
                n.getComponent("Box").setExploreConfig(t - 1, e, o);
                var i = -this.parentHeight - o + 140
                  , a = cc.moveBy(-i / 70, 0, i);
                return n.runAction(cc.repeatForever(a)),
                n
            },
            getRandomNum: function(t, e) {
                for (; t.length < e; ) {
                    var o = Math.floor(7 * Math.random());
                    -1 == t.indexOf(o) && t.push(o)
                }
                return t
            },
            recycler: function(t) {
                cc.MainGame.coinStarAnim.addPatchAnim(cc.v2(t.x, t.y)),
                t.active = !1,
                t.parent = null
            },
            clearAllBoxs: function() {
                var t = !0
                  , e = !1
                  , o = void 0;
                try {
                    for (var n, i = this.boxsParentNode.children[Symbol.iterator](); !(t = (n = i.next()).done); t = !0) {
                        var a = n.value;
                        "Box" == a.name && (cc.MainGame.coinStarAnim.addPatchAnim(cc.v2(a.x, a.y)),
                        a.stopAllActions(),
                        a.active = !1)
                    }
                } catch (t) {
                    e = !0,
                    o = t
                } finally {
                    try {
                        !t && i.return && i.return()
                    } finally {
                        if (e)
                            throw o
                    }
                }
                this.scheduleOnce(function() {
                    this.canClear = !0,
                    this.game.failed()
                }, 1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ExploreChoose: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "93cc2/VsthLEbYPAg4D5NJW", "ExploreChoose");
        var n = t("LocalStorage");
        cc.Class({
            extends: t("BaseUtils"),
            properties: {
                exploreItem: cc.Prefab,
                cannonSpriteFrames: [cc.SpriteFrame],
                listContent: cc.Node,
                freeTimes: cc.Label,
                starCount: cc.Label,
                level: cc.Label,
                watchVideoToPlay: cc.Prefab,
                chooseScrollView: cc.ScrollView
            },
            start: function() {
                var t = this;
                cc.dialogManager.dialogNode = this.node,
                Global.explore || (Global.explore = {
                    level: 0,
                    freeTimes: 3,
                    lastPlayTime: 0
                }),
                this.getTodayDate() > Global.explore.lastPlayTime && (Global.explore.freeTimes = 3,
                Global.explore.lastPlayTime = this.getTodayDate(),
                n.save("explore", Global.explore)),
                this.freeTimes.string = Global.explore.freeTimes + "/3",
                this.starCount.string = Global.userData.star,
                this.level.string = Global.explore.level + "/" + this.cannonSpriteFrames.length;
                for (var e = 0; e < this.cannonSpriteFrames.length; e++) {
                    var o = cc.instantiate(this.exploreItem)
                      , i = o.getComponent("ExploreItem");
                    i.setParent(this),
                    i.setConfig(e, this.cannonSpriteFrames[e], Global.explore.level),
                    this.listContent.addChild(o)
                }
                this.scheduleOnce(function() {
                    var e = 207 * Math.floor(Global.explore.level / 4 - 3);
                    e < 0 && (e = 0),
                    cc.log("\u6eda\u52a8\u5230" + e),
                    t.chooseScrollView.scrollToOffset(cc.v2(0, e))
                }),
                cc.director.preloadScene("ExploreGame")
            },
            readExploreHistory: function() {},
            saveExploreHistory: function() {},
            toGame: function() {
                Global.explore.freeTimes > 0 ? (Global.explore.freeTimes--,
                n.save("explore", Global.explore),
                this.startScene("ExploreGame", null)) : cc.dialogManager.showGameDialog(null, "ChallengeDialog")
            },
            back: function() {
                this.startScene("game", null)
            },
            showStarDialog: function() {
                cc.dialogManager.showGameDialog(null, "receiveStarDialog")
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseUtils: "BaseUtils",
        LocalStorage: "LocalStorage"
    }],
    ExploreFailedDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e8301hJAsFGHb0skWNBjtl1", "ExploreFailedDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {},
            start: function() {},
            back: function() {
                this.clickable && cc.director.loadScene("ExploreChoose")
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    ExploreGame: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ce7fdl8sadNn692ggUesUmt", "ExploreGame");
        var n = t("LocalStorage");
        cc.Class({
            extends: t("BaseUtils"),
            properties: {
                bgm: {
                    type: cc.AudioSource,
                    default: null
                },
                cannon: cc.Node,
                star: cc.Label,
                level: cc.Label,
                coinAndStarAnimNode: cc.Node,
                camera: cc.Node,
                boxsParentNode: cc.Node,
                successDialog: cc.Prefab,
                failedDialog: cc.Prefab
            },
			onLoad:function(){
				this.autoAdapteScreen();
			},
			autoAdapteScreen:function(){
				// 适配解决方案
				let _canvas = cc.Canvas.instance;
			// 设计分辨率比
				let _rateR = _canvas.designResolution.height/_canvas.designResolution.width;
			// 显示分辨率比
				let _rateV = cc.winSize.height/cc.winSize.width;
				console.log("winSize: rateR: "+_rateR+" rateV: "+_rateV);
				if (_rateV > _rateR)
				{
					_canvas.fitHeight = false;
					_canvas.fitWidth = true;
					console.log("winSize: fitWidth");
				}
				else
				{
					_canvas.fitHeight = true;
					_canvas.fitWidth = false;
					console.log("winSize: fitHeight");
				}
			},
            start: function() {
                cc.dialogManager.dialogNode = this.node,
                cc.bulletFactory = this.node.getComponent("BulletFactory"),
                cc.boxFactory = this.node.getComponent("ExploreBoxFactory"),
                cc.cannonFactory = this.node.getComponent("CannonFactory"),
                cc.boxFactory.setLevel(Global.explore.level + 1),
                cc.boxFactory.setGame(this),
                this.cannon.getComponent("Cannon").setConfig(Global.explore.level + 1),
                this.cannon.getComponent("Cannon").setExploreConfig(),
                this.coinStarAnim = this.coinAndStarAnimNode.getComponent("CoinStarAnim"),
                cc.MainGame = this,
                this.boxCount = 70,
                this.star.string = Global.userData.star,
                this.level.string = "\u5173\u5361" + (Global.explore.level + 1),
                this.playBgm()
            },
            addScore: function(t) {},
            breakBox: function(t) {
                this.cameraShake(5),
                this.coinStarAnim.addPatchAnim(cc.v2(t.x, t.y)),
                this.isSuccess() && (Global.explore.level += 1,
                n.save("explore", Global.explore),
                this.success())
            },
            isSuccess: function() {
                var t = !0
                  , e = !1
                  , o = void 0;
                try {
                    for (var n, i = this.boxsParentNode.children[Symbol.iterator](); !(t = (n = i.next()).done); t = !0) {
                        if ("Box" == n.value.name)
                            return !1
                    }
                } catch (t) {
                    e = !0,
                    o = t
                } finally {
                    try {
                        !t && i.return && i.return()
                    } finally {
                        if (e)
                            throw o
                    }
                }
                return !0
            },
            back: function() {
                this.startScene("ExploreChoose", null)
            },
            success: function() {
                cc.dialogManager.showGameDialog(null, "ExploreSuccessDialog")
            },
            failed: function() {
                cc.dialogManager.showGameDialog(null, "ExploreFailedDialog")
            },
            cameraShake: function(t) {
                if (Global.userConfig.isShake && this.camera && 0 == this.camera.getNumberOfRunningActions()) {
                    cc.sys.platform === cc.sys.WECHAT_GAME && wx.vibrateShort();
                    var e = cc.moveTo(.02 + .03 * Math.random(), -t + 2 * Math.random() * t, -t + 2 * Math.random() * t)
                      , o = cc.moveTo(.02 + .03 * Math.random(), -t + 2 * Math.random() * t, -t + 2 * Math.random() * t)
                      , n = cc.moveTo(.02 + .03 * Math.random(), -t + 2 * Math.random() * t, -t + 2 * Math.random() * t)
                      , i = cc.moveTo(.02 + .03 * Math.random(), -t + 2 * Math.random() * t, -t + 2 * Math.random() * t)
                      , a = cc.moveTo(.02 + .03 * Math.random(), 0, 0);
                    this.camera.runAction(cc.sequence(e, o, n, i, a))
                }
            },
            playBgm: function() {
                Global.userConfig.isSound ? this.bgm.play() : this.bgm.stop()
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseUtils: "BaseUtils",
        LocalStorage: "LocalStorage"
    }],
    ExploreItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f9795dQryBDhahbn9iG/jM+", "ExploreItem"),
        cc.Class({
            extends: cc.Component,
            properties: {
                icon: cc.Node,
                locked: cc.Node,
                passed: cc.Node
            },
            start: function() {},
            setParent: function(t) {
                this.parent = t
            },
            setConfig: function(t, e, o) {
                this.index = t,
                this.currentLevel = o,
                t < o ? (this.locked.active = !1,
                this.passed.active = !0,
                this.icon.getComponent(cc.Sprite).spriteFrame = null) : t == o ? (this.locked.active = !1,
                this.passed.active = !1,
                this.icon.getComponent(cc.Sprite).spriteFrame = e) : (this.locked.active = !0,
                this.passed.active = !1,
                this.icon.getComponent(cc.Sprite).spriteFrame = null)
            },
            onClick: function() {
                this.index == this.currentLevel && this.parent.toGame()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ExploreSuccessDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ff16d1zNNNCealZ+om3JjAv", "ExploreSuccessDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                starCount: cc.Label
            },
            start: function() {},
            single: function() {
                this.clickable && (Global.userData.star += 10,
                cc.director.loadScene("ExploreChoose"))
            },
            double: function() {
                this.clickable && this.adsManager.showAd({
                    success: function() {
                        Global.userData.star += 20,
                        cc.director.loadScene("ExploreChoose")
                    },
                    failed: function() {}
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    GameWarning: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fbe58vzKXBDPZ2N+hiHM+YJ", "GameWarning"),
        cc.Class({
            extends: cc.Component,
            properties: {
                warningNode: cc.Node
            },
            start: function() {
                this.contactCount = 0,
                this.warning = !1,
                this.gameOver = !1,
                this.failedCount = 0
            },
            onBeginContact: function(t, e, o) {
                switch (e.tag) {
                case 99:
                    this.contactCount++,
                    this.warning || (this.warning = !0,
                    this.warningNode.active = !0,
                    this.warningNode.opacity = 0,
                    this.warningNode.runAction(cc.repeatForever(cc.sequence(cc.fadeTo(.5, 150), cc.fadeTo(.5, 0)))));
                    break;
                case 100:
                    this.contactCount++,
                    this.gameOver || (this.failedCount++,
                    this.failedCount > 3 && (this.failedCount = 0,
                    cc.MainGame.showPromotionDownDialog()),
                    this.gameOver = !0,
                    cc.boxFactory.clearAllBoxs())
                }
            },
            onEndContact: function(t, e, o) {
                switch (e.tag) {
                case 99:
                    this.contactCount--,
                    0 == this.contactCount && (this.warning = !1,
                    this.warningNode.opacity = 0,
                    this.warningNode.stopAllActions(),
                    this.warningNode.active = !1);
                    break;
                case 100:
                    this.contactCount--,
                    0 == this.contactCount && (this.gameOver = !1)
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Game: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f51d6O3a3JJB4RWoAYxqKcg", "Game");
        t("NetApi");
        var n = t("LocalStorage");
        cc.Class({
            extends: t("BaseUtils"),
            properties: {
                bgm: {
                    type: cc.AudioSource,
                    default: null
                },
                starLab: cc.Label,
                scoreLab: cc.Label,
                promotionLab: cc.Label,
                promotionNode: cc.Node,
                promotionUpNormalButton: cc.Node,
                promotionUpLightButton: cc.Node,
                promotionUpProgressBar: cc.ProgressBar,
                promotionFrames: [cc.SpriteFrame],
                promotionAnimFrames: [cc.SpriteFrame],
                positionNodeParent: cc.Node,
                moreBg: cc.Node,
                moreNode: cc.Node,
                bulletsNodes: cc.Node,
                gameUi: cc.Node,
                dialogBg: cc.Node,
                promotionJson: cc.JsonAsset,
                starReceiveConfig: cc.JsonAsset,
                autoMegraNode: cc.Node,
                coinRainNode: cc.Node,
                coinAndStarAnimNode: cc.Node,
                nextCannonName: cc.Label,
                nextCannonPrice: cc.Label,
                camera: cc.Node,
                dialogUi: cc.Node,
                brokenBoxCountBeforePromotionUp: 10,
                guide: cc.Node,
                giftBox: cc.Prefab
            },
            onLoad: function() {
				this.autoAdapteScreen();
				
                cc.director.getPhysicsManager().enabled = !0,
                cc.director.getCollisionManager().enabled = !0,
                cc.bulletFactory = this.node.getComponent("BulletFactory"),
                cc.boxFactory = this.node.getComponent("BoxFactory"),
                cc.cannonFactory = this.node.getComponent("CannonFactory"),
                cc.dialogManager = t("DialogManager2"),
                cc.dialogManager.dialogNode = this.dialogUi,
                cc.observer = t("Observer"),
                cc.touchAim = {
                    isTouch: !1,
                    touchPos: cc.v2(0, 0)
                },
                cc.MainGame = this,
                this.coinStarAnim = this.coinAndStarAnimNode.getComponent("CoinStarAnim"),
                this.brokenBoxCount = 0,
                this.checkOffline(),
                this.setPromotion(),
                this.setScore(Global.userData.score),
                this.setStar(Global.userData.star),
                this.syncTask = function() {
                    this.saveUserData()
                }
                ,
                this.schedule(this.syncTask, 10),
                this.time = 0,
                this.playBgm();
				
				
				
				var receiStarBtn = cc.find("Control/head/领取每日星星", this.node);
				//埋点 激励用完隐藏。定时
				this.TimeCheckAd = setInterval(function(){
					//receiStarBtn.active = 0;
				}, 500);
            },
			onDestroy:function(){
				clearInterval(this.TimeCheckAd);
			},
			autoAdapteScreen:function(){
				// 适配解决方案
				let _canvas = cc.Canvas.instance;
			// 设计分辨率比
				let _rateR = _canvas.designResolution.height/_canvas.designResolution.width;
			// 显示分辨率比
				let _rateV = cc.winSize.height/cc.winSize.width;
				console.log("winSize: rateR: "+_rateR+" rateV: "+_rateV);
				if (_rateV > _rateR)
				{
					_canvas.fitHeight = false;
					_canvas.fitWidth = true;
					console.log("winSize: fitWidth");
				}
				else
				{
					_canvas.fitHeight = true;
					_canvas.fitWidth = false;
					console.log("winSize: fitHeight");
				}
			},
            start: function() {
                Global.firstRun && (this.guide.active = !0,
                this.guide.getComponent("Guide").setStep(1));
                var t = this;
                cc.game.on(cc.game.EVENT_SHOW, function() {
                    t.checkOffline()
                }, this),
                this.pause = !1,
                this.buyCountMap = n.readMap("buyCount"),
                this.starReceviedMap = n.readMap("starReceive"),
                this.cannonPositionMap = n.readMap("position"),
                this.fixPositionMap();
                var e = !0
                  , o = !1
                  , i = void 0;
                try {
                    for (var a, s = this.cannonPositionMap[Symbol.iterator](); !(e = (a = s.next()).done); e = !0) {
                        var c = a.value;
                        this.addChannonToPosition(c[0], c[1])
                    }
                } catch (t) {
                    o = !0,
                    i = t
                } finally {
                    try {
                        !e && s.return && s.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                this.scoreListener = {
                    key: "score",
                    call: function(e) {
                        t.scoreLab.string = t.formatScore(e)
                    }
                },
                this.starListener = {
                    key: "star",
                    call: function(e) {
                        t.starLab.string = e
                    }
                },
                cc.observer.subscribe(this.scoreListener),
                cc.observer.subscribe(this.starListener),
                this.setNextPrice(),
                this.getSword(),
                this.setPromotionUpLight(!1),
                this.addGiftBoxTask(),
                cc.director.preloadScene("ExploreChoose")
            },
            fixPositionMap: function() {
                var t = new Map
                  , e = !0
                  , o = !1
                  , n = void 0;
                try {
                    for (var i, a = this.cannonPositionMap[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                        var s = i.value
                          , c = parseInt(s[0]);
                        t.has(c + "") || t.set(c + "", s[1])
                    }
                } catch (t) {
                    o = !0,
                    n = t
                } finally {
                    try {
                        !e && a.return && a.return()
                    } finally {
                        if (o)
                            throw n
                    }
                }
                this.cannonPositionMap = t
            },
            addGiftBoxTask: function() {
                this.schedule(function() {
                    cc.log("\u52a0\u5165\u5b9d\u7bb1"),
                    this.addGiftBox()
                }, 40)
            },
            checkOffline: function() {
                this.scheduleOnce(function() {
                    Date.parse(new Date) > Global.userData.lastSyncTime + 12e4 && cc.dialogManager.showGameDialogByArgs("OfflineDialog", Global.userData.lastSyncTime)
                }, .2)
            },
            maxLevelChanged: function(t) {
                Global.userData._maxLevel = t,
                this.saveUserData(),
                cc.dialogManager.showGameDialogByArgs("CannonDialog", Global.userData.maxLevel - 1)
            },
            addScore: function(t) {
                if ((t = Math.floor(t)) >= 0)
                    Global.userData._score += t;
                else {
                    if (!(Global.userData._score > -t))
                        return this.showToast("\u91d1\u5e01\u4e0d\u8db3"),
                        !1;
                    Global.userData._score += t
                }
                return !0
            },
            setScore: function(t) {
                t = Math.floor(t),
                Global.userData.score = t,
                this.scoreLab.string = this.formatScore(t)
            },
            addStar: function(t) {
                if ((t = Math.floor(t)) >= 0)
                    Global.userData._star += t,
                    this.coinStarAnim.addStarAnim(null);
                else {
                    if (!(Global.userData.star >= -t))
                        return this.showToast("\u661f\u661f\u4e0d\u8db3"),
                        !1;
                    Global.userData._star += t
                }
                return this.saveUserData(),
                !0
            },
            setStar: function(t) {
                t = Math.floor(t),
                Global.userData.star = t,
                this.starLab.string = Global.userData.star
            },
            breakBox: function(t) {
                if (this.cameraShake(5),
                this.coinStarAnim.AddGoldAnim(cc.v2(t.x, t.y), 1),
                this.coinStarAnim.addPatchAnim(cc.v2(t.x, t.y)),
                !this.promotionUpLightButton.active) {
                    this.brokenBoxCount++;
                    var e = this.brokenBoxCount / this.brokenBoxCountBeforePromotionUp;
                    e > 1 && (e = 1),
                    this.promotionUpProgressBar.progress = e,
                    this.promotionUpNormalButton.active && this.brokenBoxCount >= this.brokenBoxCountBeforePromotionUp && this.setPromotionUpLight(!0)
                }
            },
            resetProgress: function() {
                this.brokenBoxCount = 0;
                var t = this.brokenBoxCount / this.brokenBoxCountBeforePromotionUp;
                t > 1 && (t = 1),
                this.promotionUpProgressBar.progress = t,
                this.setPromotionUpLight(!1)
            },
            addCannon: function(t, e, o) {
                e = parseInt(e);
                var i = !1;
                if (null != o) {
                    i = !0;
                    var a = this.buyCountMap.get(e);
                    a || (a = 0),
                    -2 != e && a++,
                    this.buyCountMap.set(e, a),
                    n.saveMap("buyCount", this.buyCountMap);
                    var s = void 0;
                    e < 0 ? ((e = Global.userData.maxLevel - 5) < 1 && (e = 1),
                    s = cc.cannonFactory.getCannonByLevel(e)) : s = cc.cannonFactory.getCannonByLevel(e),
                    o.addChild(s, 0, "cannon"),
                    s.angle = -45,
                    s.x = -39,
                    s.y = -39,
                    this.savePosition(1, s),
                    this.saveUserData(),
                    this.guideExecute()
                } else
                    for (var c in this.positionNodeParent.children)
                        if (0 == this.positionNodeParent.children[c].childrenCount) {
                            i = !0;
                            var r = this.buyCountMap.get(e);
                            r || (r = 0),
                            -2 != e && r++,
                            this.buyCountMap.set(e, r),
                            n.saveMap("buyCount", this.buyCountMap);
                            var l = void 0;
                            e < 0 ? ((e = Global.userData.maxLevel - 5) < 1 && (e = 1),
                            l = cc.cannonFactory.getCannonByLevel(e)) : l = cc.cannonFactory.getCannonByLevel(e),
                            this.positionNodeParent.children[c].addChild(l, 0, "cannon"),
                            l.angle = -45,
                            l.x = -39,
                            l.y = -39,
                            this.savePosition(1, l),
                            this.saveUserData(),
                            this.guideExecute();
                            break
                        }
                return i
            },
            addGiftBox: function() {
                for (var t in this.positionNodeParent.children)
                    if (0 == this.positionNodeParent.children[t].childrenCount) {
                        var e = cc.instantiate(this.giftBox);
                        e.x = 0,
                        e.y = 2e3,
                        e.getComponent("GiftBox").setConfig(Math.random() > .7 ? 0 : 1),
                        this.positionNodeParent.children[t].addChild(e, 0, "giftBox");
                        var o = cc.moveTo(.5, 0, 0);
                        o.easing(cc.easeBackOut()),
                        e.runAction(o);
                        break
                    }
            },
            buyCannon: function() {
                Global.userData.score >= this.price ? this.addCannon(null, this.nextLevel) && (this.addScore(-this.price),
                this.setNextPrice()) : this.showToast("\u91d1\u5e01\u4e0d\u8db3")
            },
            setNextPrice: function() {
                this.nextLevel = Global.userData.maxLevel - 5,
                this.nextLevel = this.nextLevel < 1 ? 1 : this.nextLevel;
                var t = this.buyCountMap.get(this.nextLevel);
                t || this.buyCountMap.set(this.nextLevel, 0),
                this.price = this.getCannonPrice(this.nextLevel, t),
                this.nextCannonName.string = "\u8d2d\u4e70" + this.nextLevel + "\u53f7\u70ae",
                this.nextCannonPrice.string = "x" + this.formatScore(Math.floor(this.price))
            },
            getCannonPrice: function(t, e) {
                var o = void 0;
                return e ? o = 100 * Math.pow(4, t - 1) * Math.pow(1.07, e) : (o = 100 * Math.pow(4, t - 1),
                cc.MainGame.buyCountMap.set(t, 0)),
                o
            },
            getSword: function() {
                var t = 0
                  , e = !0
                  , o = !1
                  , n = void 0;
                try {
                    for (var i, a = this.cannonPositionMap[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                        var s = i.value;
                        t += 5 * Math.pow(1.6, s[1] - 1)
                    }
                } catch (t) {
                    o = !0,
                    n = t
                } finally {
                    try {
                        !e && a.return && a.return()
                    } finally {
                        if (o)
                            throw n
                    }
                }
                return t = t * Global.userData.attackByPromotionUp * Global.userData.attacKByVip,
                parseInt(t)
            },
            addChannonToPosition: function(t, e) {
                e = parseInt(e),
                t = parseInt(t);
                var o = cc.cannonFactory.getCannonByLevel(e);
                t <= 4 ? (o.angle = 0,
                o.y = 20,
                o.x = 0,
                this.bulletsNodes.children[t + 1].addChild(o, 0, "cannon"),
                o.setSiblingIndex(1),
                o.getComponent("Cannon").startFire()) : (o.angle = -45,
                o.y = -39,
                o.x = -39,
                this.positionNodeParent.children[t - 5].addChild(o, 0, "cannon"))
            },
            savePosition: function(t, e) {
                try {
                    switch (t) {
                    case 0:
                        this.cannonPositionMap.delete(e.parent.name);
                        break;
                    case 1:
                        this.cannonPositionMap.set(e.parent.name, e.getComponent("Cannon").level)
                    }
                } catch (t) {}
                n.saveMap("position", this.cannonPositionMap)
            },
            toExplore: function() {
                this.saveUserData(),
                this.startScene("ExploreChoose", null)
            },
            onDestroy: function() {
                cc.observer.unsubscribe(this.scoreListener),
                cc.observer.unsubscribe(this.starListener)
            },
            showMore: function() {
                if (this.moreBg.active) {
                    this.moreBg.active = !1;
                    var t = cc.moveBy(.2, -236, 0);
                    t.easing(cc.easeBackIn()),
                    this.moreNode.runAction(t)
                } else
                    this.moreBg.active = !0,
                    this.moreNode.runAction(cc.moveBy(.2, 236, 0))
            },
            guideExecute: function() {
                Global.firstRun && this.guide.getComponent("Guide").execute()
            },
            cameraShake: function(t) {
                if (Global.userConfig.isShake && 0 == this.camera.getNumberOfRunningActions()) {
                    cc.sys.platform === cc.sys.WECHAT_GAME && wx.vibrateShort();
                    var e = cc.moveTo(.02 + .03 * Math.random(), -t + 2 * Math.random() * t, -t + 2 * Math.random() * t)
                      , o = cc.moveTo(.02 + .03 * Math.random(), -t + 2 * Math.random() * t, -t + 2 * Math.random() * t)
                      , n = cc.moveTo(.02 + .03 * Math.random(), -t + 2 * Math.random() * t, -t + 2 * Math.random() * t)
                      , i = cc.moveTo(.02 + .03 * Math.random(), -t + 2 * Math.random() * t, -t + 2 * Math.random() * t)
                      , a = cc.moveTo(.02 + .03 * Math.random(), 0, 0);
                    this.camera.runAction(cc.sequence(e, o, n, i, a))
                }
            },
            pauseNodeAndDescendants: function(t) {},
            resumeNodeAndDescendants: function(t) {},
            showDialog: function(t, e) {
                cc.dialogManager.showGameDialog(t, e)
            },
            setPromotionUpLight: function(t) {
                Global.userData.promotion >= 15 || (t || (this.brokenBoxCount = 0,
                this.promotionUpProgressBar.progress = 0),
                this.promotionUpNormalButton.active = !t,
                this.promotionUpLightButton.active = t)
            },
            setPromotion: function() {
                this.brokenBoxCountBeforePromotionUp = 10 + 4 * Global.userData.promotion,
                this.promotionNode.getComponent(cc.Sprite).spriteFrame = this.promotionFrames[Global.userData.promotion],
                this.promotionLab.string = this.promotionJson.json.promotions[Global.userData.promotion].name,
                this.setPromotionUpLight(!1)
            },
            openAutoMegra: function() {
                Global.userData.autoMegraEndTime = Date.parse(new Date) + 18e4,
                this.autoMegraNode.active = !0
            },
            getSpeed: function() {
                return Global.userData.speedUpEndTime > Date.parse(new Date) ? 2 : 1
            },
            saveUserData: function() {
                Global.userData.lastSyncTime = Date.parse(new Date),
                n.save("userData", Global.userData)
            },
            showPromotionUpDialog: function() {
                cc.dialogManager.showGameDialogByArgs("LevelDialog", 1)
            },
            showPromotionDownDialog: function() {
                Global.userData.promotion > 1 && !cc.dialogManager.isOtherDialogShowing() ? cc.dialogManager.showGameDialogByArgs("LevelDialog", 0) : this.showToast("\u6bb5\u4f4d\u4e0d\u80fd\u518d\u964d\u5566~")
            },
            playBgm: function() {
                Global.userConfig.isSound ? this.bgm.play() : this.bgm.stop()
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseUtils: "BaseUtils",
        DialogManager2: "DialogManager2",
        LocalStorage: "LocalStorage",
        NetApi: "NetApi",
        Observer: "Observer"
    }],
    GiftBoxDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "abf9aUzEMRCN6S9tlumH9Ys", "GiftBoxDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {},
            receive: function() {
                var t = this;
                this.clickable && this.adsManager.showAd({
                    success: function() {
                        for (var e = 0; e < 4; e++)
                            cc.MainGame.addCannon(null, -2);
                        t.dismiss()
                    },
                    failed: function() {}
                })
            },
            start: function() {
				//var btn_watchad_offline = cc.find("Animbody/btn_watchad_offline", this.node);
			//	btn_watchad_offline.active = 0;
				//console.log(this.node);
			}
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    GiftBox: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3d60dklj3hF3YhGgchIVW2B", "GiftBox"),
        cc.Class({
            extends: cc.Component,
            properties: {
                boxFrames: [cc.SpriteFrame],
                icon: cc.Node
            },
            setConfig: function(t) {
                switch (this.type = t,
                this.icon.getComponent(cc.Sprite).spriteFrame = this.boxFrames[t],
                this.icon.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.3), cc.scaleTo(.5, 1)))),
                t) {
                case 0:
                    this.scheduleOnce(function() {
                        var t = this.node.parent;
                        this.node.parent = null,
                        this.node.active = !1,
                        cc.MainGame.addCannon(null, -2, t)
                    }, 10);
                    break;
                case 1:
                    this.scheduleOnce(function() {
                        this.node.parent = null,
                        this.node.active = !1
                    }, 20)
                }
            },
            start: function() {
				var thisObj = this;
				if(1 == this.type){
					//埋点 没有激励执行下面。不用定时
					{
						thisObj.node.parent = null,
						thisObj.node.active = !1,
					}
				}
			},
            onClick: function() {
                switch (this.type) {
                case 0:
                    var t = this.node.parent;
                    this.node.parent = null,
                    this.node.active = !1,
                    cc.MainGame.addCannon(null, -2, t);
                    break;
                case 1:
                    this.node.parent = null,
                    this.node.active = !1,
                    cc.dialogManager.showGameDialog(null, "GiftBoxDialog")
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    GiftDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "61938Sy8H5NQ58RGdJj6pXG", "GiftDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                giftSpriteFrames: [cc.SpriteFrame],
                giftIcon: cc.Node
            },
            start: function() {
				
				var btn_watchadtoget_small = cc.find("Seqanimbody/btn_watchadtoget_small", this.node);
				//埋点 激励用完隐藏。不用定时
				//btn_watchadtoget_small.active = 0;
				
				//console.log(this.node);
			},
            onShow: function() {
                this.type = Math.floor(2 * Math.random()),
                this.giftIcon.getComponent(cc.Sprite).spriteFrame = this.giftSpriteFrames[this.type]
            },
            receiveFree: function() {
                var t = this;
                this.clickable && this.adsManager.showAd({
                    success: function() {
                        t.showGift()
                    },
                    failed: function() {}
                })
            },
            receiveByStar: function() {
                this.clickable && cc.MainGame.addStar(-6) && this.showGift()
            },
            showGift: function() {
                if (this.clickable)
                    switch (this.dismiss(),
                    this.type) {
                    case 0:
                        cc.dialogManager.showGameDialogByArgs("TurntableResultDialog", 1);
                        for (var t = 0; t < 4; t++)
                            cc.MainGame.addCannon(null, -2);
                        break;
                    case 1:
                        cc.dialogManager.showGameDialogByArgs("TurntableResultDialog", 2),
                        Global.userData.fiveTimesIncomeEndTime < Date.parse(new Date) ? Global.userData.fiveTimesIncomeEndTime = Date.parse(new Date) + 15e4 : Global.userData.fiveTimesIncomeEndTime += 15e4,
                        cc.MainGame.coinRainNode.active = !0
                    }
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    Globals: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "077e0gZo5RFEJblmVWvKXGq", "Globals"),
        window.Global = {
            explore: null,
            userData: null,
            userConfig: null,
            firstRun: !1
        },
        cc._RF.pop()
    }
    , {}],
    GoldDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a5bc5RO701AiKwqgowbdxp6", "GoldDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                coin: cc.Label,
                star: cc.Label
            },
            start: function() {},
            onShow: function() {
                this.currentCoin = Global.userData.savingPotCoinCount,
                this.currentCoinString = this.formatScore(this.currentCoin),
                this.currentStar = Math.floor(2 + .8 * Global.userData.promotion),
                this.coin.string = this.currentCoinString,
                this.star.string = "x" + this.currentStar
            },
            receive: function() {
                this.clickable && (cc.MainGame.addStar(-this.currentStar) ? (cc.MainGame.addScore(this.currentCoin),
                cc.MainGame.coinStarAnim.AddGoldAnim(null, 1),
                Global.userData.savingPotCoinCount -= this.currentCoin,
                this.dismiss()) : cc.MainGame.showToast("\u661f\u661f\u4e0d\u8db3"))
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    Guide: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1f58boR6btIxZ3GR9uflGVo", "Guide"),
        cc.Class({
            extends: cc.Component,
            properties: {
                guides: [cc.Node],
                pos1_2: cc.Node,
                pos2_1: cc.Node,
                pos2_2: cc.Node,
                buyBtn: cc.Node,
                hand1: cc.Node,
                hand2: cc.Node,
                hand3: cc.Node
            },
            start: function() {
                this.tempParent1,
                this.tempParent2,
                this.tempParent3,
                this.counter = 0
            },
            setStep: function(t) {
                this.step = t;
                var e = void 0
                  , o = void 0;
                for (var n in this.guides)
                    n == "" + (t - 1) ? (o = (e = this.guides[n]).children[2],
                    e.active = !0) : this.guides[n].active = !1;
                switch (t) {
                case 1:
                    this.tempParent1 = this.buyBtn.parent,
                    this.buyBtn.parent = o,
                    this.hand1.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.5, .82))));
                    break;
                case 2:
                    this.buyBtn.parent = this.tempParent1,
                    this.tempParent1 = this.pos2_1.parent,
                    this.tempParent2 = this.pos2_2.parent,
                    this.pos2_1.parent = o,
                    this.pos2_2.parent = o,
                    this.hand2.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.7, -200, 0), cc.moveBy(.1, 200, 0))));
                    break;
                case 3:
                    this.pos2_1.parent = this.tempParent1,
                    this.pos2_2.parent = this.tempParent2,
                    this.pos2_1.setSiblingIndex(0),
                    this.pos2_2.setSiblingIndex(1),
                    this.tempParent1 = this.pos2_1.parent,
                    this.pos2_1.parent = o,
                    this.hand3.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.7, 185, 235), cc.moveBy(.1, -185, -235))));
                    break;
                case 4:
                    Global.firstRun = !1,
                    this.pos2_1.parent = this.tempParent1,
                    this.pos2_1.setSiblingIndex(0),
                    this.node.active = !1
                }
            },
            execute: function() {
                switch (this.counter++,
                this.step) {
                case 1:
                    this.counter >= 2 && (this.counter = 0,
                    this.setStep(2));
                    break;
                case 2:
                    this.counter >= 1 && (this.counter = 0,
                    this.setStep(3));
                    break;
                case 3:
                    this.counter >= 1 && (this.counter = 0,
                    this.setStep(4))
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LanguageData: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
        var n = t("polyglot.min")
          , i = null;
        function a(t) {
            return window.i18n.languages[t]
        }
        function s(t) {
            t && (i ? i.replace(t) : i = new n({
                phrases: t,
                allowMissing: !0
            }))
        }
        window.i18n || (window.i18n = {
            languages: {},
            curLang: ""
        }),
        e.exports = {
            init: function(t) {
                if (t !== window.i18n.curLang) {
                    var e = a(t) || {};
                    window.i18n.curLang = t,
                    s(e),
                    this.inst = i
                }
            },
            t: function(t, e) {
                if (i)
                    return i.t(t, e)
            },
            inst: i,
            updateSceneRenderers: function() {
                for (var t = cc.director.getScene().children, e = [], o = 0; o < t.length; ++o) {
                    var n = t[o].getComponentsInChildren("LocalizedLabel");
                    Array.prototype.push.apply(e, n)
                }
                for (var i = 0; i < e.length; ++i) {
                    var a = e[i];
                    a.node.active && a.updateLabel()
                }
                for (var s = [], c = 0; c < t.length; ++c) {
                    var r = t[c].getComponentsInChildren("LocalizedSprite");
                    Array.prototype.push.apply(s, r)
                }
                for (var l = 0; l < s.length; ++l) {
                    var h = s[l];
                    h.node.active && h.updateSprite(window.i18n.curLang)
                }
            }
        },
        cc._RF.pop()
    }
    , {
        "polyglot.min": "polyglot.min"
    }],
    LevelDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a3f4fQdEB5Hy6SDB4pbABAN", "LevelDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                targetSword: cc.Label,
                currentSword: cc.Label,
                downBtn: cc.Node
            },
            start: function() {},
            onShow: function() {
                this.target,
                1 == this.args ? (this.target = Global.userData.promotion,
                this.downBtn.active = !1) : (this.target = Global.userData.promotion - 1,
                this.downBtn.active = !0),
                this.currentSword.string = this.formatScore(cc.MainGame.getSword()),
                this.targetSword.string = this.formatScore(6 * Math.pow(3, this.target))
            },
            promotionUp: function() {
                this.clickable && (this.dismiss(),
                cc.dialogManager.showGameDialog(null, "PromotionDialog"))
            },
            promotionDown: function() {
                var t = this;
                this.clickable && (cc.MainGame.getSword() > 6 * Math.pow(3, this.target) ? cc.dialogManager.showGameDialogByArgs("ConfirmDialog", {
                    title: "\u6218\u529b\u7206\u8868\uff0c\u662f\u5426\u964d\u4f4e\u6bb5\u4f4d",
                    confirm: function() {
                        t.adsManager.showAd({
                            success: function() {
                                Global.userData.promotion--,
                                cc.dialogManager.showGameDialogByArgs("PromotionAnimDialog", Global.userData.promotion)
                            },
                            failed: function() {}
                        })
                    }
                }) : this.adsManager.showAd({
                    success: function() {
                        Global.userData.promotion--,
                        cc.dialogManager.showGameDialogByArgs("PromotionAnimDialog", Global.userData.promotion)
                    },
                    failed: function() {}
                }),
                this.dismiss())
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    LocalStorage: [function(t, e, o) {
        "use strict";
        function n(t) {
            if (Array.isArray(t)) {
                for (var e = 0, o = Array(t.length); e < t.length; e++)
                    o[e] = t[e];
                return o
            }
            return Array.from(t)
        }
        cc._RF.push(e, "54408wxnoVILYZh08gDPag4", "LocalStorage");
        var i = {
            initObject: function(e, o) {
                if (this.net = t("NetApi"),
                this.read(e))
                    null != o && o();
                else {
                    var n = this;
                    this.net.getCannonJson(e, {
                        success: function(t) {
                            var i = t.data;
                            if (i.length > 0) {
                                var a = decodeURIComponent(i[0].json);
                                n.save(e, a),
                                null != o && o()
                            } else
                                null != o && o()
                        },
                        failed: function(t, e) {
                            cc.log(t + "," + e)
                        }
                    })
                }
            },
            initMap: function(e, o) {
                if (this.net = t("NetApi"),
                0 == this.readMap(e).size) {
                    var n = this;
                    this.net.getCannonJson(e, {
                        success: function(t) {
                            var i = t.data;
                            if (i.length > 0) {
                                var a = decodeURIComponent(i[0].json);
                                n.save(e, a),
                                null != o && o()
                            } else
                                null != o && o()
                        },
                        failed: function(t, e) {
                            cc.log(t + "," + e)
                        }
                    })
                } else
                    null != o && o()
            },
            save: function(t, e) {
                "string" == typeof e ? (cc.sys.localStorage.setItem(t, e),
                this.net.addCannonJson(t, e)) : (cc.sys.localStorage.setItem(t, JSON.stringify(e)),
                this.net.addCannonJson(t, JSON.stringify(e)))
            },
            saveMap: function(t, e) {
                "string" == typeof e ? (cc.sys.localStorage.setItem(t, e),
                this.net.addCannonJson(t, e)) : (cc.sys.localStorage.setItem(t, JSON.stringify([].concat(n(e)))),
                this.net.addCannonJson(t, JSON.stringify([].concat(n(e)))))
            },
            read: function(t) {
                var e = cc.sys.localStorage.getItem(t);
                if (null === e)
                    return cc.log("\u672c\u5730\u65e0" + t + "\u6570\u636e"),
                    null;
                var o = void 0;
                try {
                    o = JSON.parse(e)
                } catch (t) {
                    return null
                }
                return o
            },
            readMap: function(t) {
                var e = cc.sys.localStorage.getItem(t)
                  , o = void 0;
                if (null === e)
                    cc.log("\u672c\u5730\u65e0" + t + "\u6570\u636e"),
                    o = new Map;
                else
                    try {
                        o = new Map(JSON.parse(e))
                    } catch (t) {
                        o = new Map
                    }
                return o
            }
        };
        e.exports = i,
        cc._RF.pop()
    }
    , {
        NetApi: "NetApi"
    }],
    LocalizedLabel: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
        var n = t("LanguageData");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                menu: "i18n/LocalizedLabel"
            },
            properties: {
                dataID: {
                    get: function() {
                        return this._dataID
                    },
                    set: function(t) {
                        this._dataID !== t && (this._dataID = t,
                        this.updateLabel())
                    }
                },
                _dataID: ""
            },
            onLoad: function() {
                n.inst || n.init(),
                this.fetchRender()
            },
            fetchRender: function() {
                var t = this.getComponent(cc.Label);
                if (t)
                    return this.label = t,
                    void this.updateLabel()
            },
            updateLabel: function() {
                this.label ? n.t(this.dataID) && (this.label.string = n.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        LanguageData: "LanguageData"
    }],
    LocalizedSprite: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
        var n = t("SpriteFrameSet");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                inspector: "packages://i18n/inspector/localized-sprite.js",
                menu: "i18n/LocalizedSprite"
            },
            properties: {
                spriteFrameSet: {
                    default: [],
                    type: n
                }
            },
            onLoad: function() {
                this.fetchRender()
            },
            fetchRender: function() {
                var t = this.getComponent(cc.Sprite);
                if (t)
                    return this.sprite = t,
                    void this.updateSprite(window.i18n.curLang)
            },
            getSpriteFrameByLang: function(t) {
                for (var e = 0; e < this.spriteFrameSet.length; ++e)
                    if (this.spriteFrameSet[e].language === t)
                        return this.spriteFrameSet[e].spriteFrame
            },
            updateSprite: function(t) {
                if (this.sprite) {
                    var e = this.getSpriteFrameByLang(t);
                    !e && this.spriteFrameSet[0] && (e = this.spriteFrameSet[0].spriteFrame),
                    this.sprite.spriteFrame = e
                } else
                    cc.error("Failed to update localized sprite, sprite component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        SpriteFrameSet: "SpriteFrameSet"
    }],
    NetApi: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "78f87OJId1CEYBwU7FqmKNh", "NetApi");
        var n = {
            method: "GET",
            userId: null,
            requestMinInterval: 5,
            XMLHttpRequestPool: [],
            baseUrl: "https://api.928788.cn/",
            addCannonJson: function(t, e, o) {
                t += this.getUserId(),
                e = encodeURIComponent(e),
                this.request("user/addCannonJson?key=" + t + "&json=" + e, "addCannonJson" + t, o)
            },
            getCannonJson: function(t, e) {
                t += this.getUserId(),
                this.request("user/getCannonJson?key=" + t, "getCannonJson" + t, e)
            },
            adLog: function(t, e) {
                if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                    var o = this.getUserId();
                    try {
                        var n = wx.getStorageSync("wxgamecid");
                        n || (n = "default")
                    } catch (t) {}
                    this.request("ad-log/add-log?userId=" + o + "&status=" + t + "&wxgamecid=" + n, "ok", e)
                }
            },
            addUser: function(t) {
                cc.sys.localStorage.getItem("userId") ? t.success({
                    data: {
                        openId: cc.sys.localStorage.getItem("userId")
                    }
                }) : cc.sys.platform === cc.sys.WECHAT_GAME ? "undefined" != typeof tt ? (cc.log("\u7533\u8bf7\u5934\u6761\u6388\u6743"),
                this.requestlogin(t)) : this.wxlogin(t) : cc.sys.localStorage.getItem("userId") || this.visitorlogin(t)
            },
            requestlogin: function(t) {
                var e = this;
                cc.sys.platform === cc.sys.WECHAT_GAME && wx.showModal({
                    title: "\u767b\u5f55\u63d0\u793a",
                    content: "\u662f\u5426\u5141\u8bb8\u4f7f\u7528\u60a8\u7684\u8d26\u53f7\u767b\u5f55\uff1f(\u6e38\u5ba2\u8d26\u53f7\u6709\u4e22\u5931\u6e38\u620f\u6570\u636e\u7684\u98ce\u9669\uff01)",
                    cancelText: "\u6e38\u5ba2\u767b\u5f55",
                    confirmText: "\u5141\u8bb8",
                    success: function(o) {
                        o.cancel ? e.visitorlogin(t) : e.wxlogin(t)
                    }
                })
            },
            visitorlogin: function(t) {
                var e = "visitor_" + (new Date).valueOf() + "_" + Math.floor(1e4 * Math.random());
                cc.log("\u6e38\u5ba2\u767b\u5f55" + e),
                t.success({
                    data: {
                        openId: e
                    }
                })
            },
            wxlogin: function(t) {
                var e = this
                  , o = this;
                cc.log("\u5ba2\u6237\u7aef\u767b\u5f55"),
                cc.sys.platform === cc.sys.WECHAT_GAME ? wx.login({
                    success: function(o) {
                        "undefined" != typeof tt ? e.request("user/addTTUser?code=" + o.code + "&anonymousCode=" + o.anonymousCode, null, t) : e.request("user/addUser?code=" + o.code, null, t)
                    },
                    fail: function(e) {
                        wx.showModal({
                            title: "\u767b\u5f55\u5931\u8d25",
                            content: "\u767b\u5f55\u5931\u8d25\uff0c\u5c06\u901a\u8fc7\u6e38\u5ba2\u8d26\u53f7\u767b\u5f55(\u6e38\u5ba2\u8d26\u53f7\u6709\u4e22\u5931\u6e38\u620f\u6570\u636e\u7684\u98ce\u9669\uff01)",
                            cancelText: "\u91cd\u65b0\u6388\u6743",
                            confirmText: "\u6e38\u5ba2\u767b\u5f55",
                            success: function(e) {
                                e.cancel ? o.wxlogin(t) : o.visitorlogin(t)
                            }
                        })
                    }
                }) : o.visitorlogin(t)
            },
            getXmlHttpRequest: function() {
                for (var t = 0; t < this.XMLHttpRequestPool.length; t++)
                    if (0 == this.XMLHttpRequestPool[t].readyState || 4 == this.XMLHttpRequestPool[t].readyState)
                        return this.XMLHttpRequestPool[t];
                return this.XMLHttpRequestPool[this.XMLHttpRequestPool.length] = new XMLHttpRequest,
                this.XMLHttpRequestPool[this.XMLHttpRequestPool.length - 1]
            },
            request: function(t, e, o) {
                if (this.lastRequestTimeMap || (this.lastRequestTimeMap = new Map),
                null != e && "ok" != e) {
                    var n = this.lastRequestTimeMap.get(e);
                    if (n)
                        if (Date.parse(new Date) - n < 60 * this.requestMinInterval * 1e3)
                            return;
                    cc.log("\u540c\u6b65---" + e + "---\u6570\u636e"),
                    this.lastRequestTimeMap.set(e, Date.parse(new Date))
                }
                "ok" == e && (this.baseUrl = "https://px.928788.cn/");
                var i = this.getXmlHttpRequest();
                cc.log("XMLHttpRequest--method:" + this.method + ",url:" + (this.baseUrl + t)),
                i.onreadystatechange = function() {
                    if (4 == i.readyState) {
                        var t = i.responseText
                          , e = i.status;
                        if (e >= 200 && e < 400) {
                            var n = JSON.parse(t);
                            null != o && o.success(n),
                            cc.log("XMLHttpRequest--response:success:" + t)
                        } else
                            cc.log("XMLHttpRequest--response:failed:" + t),
                            null != o && o.failed(e, t)
                    }
                }
                ,
                i.open("GET", this.baseUrl + t, !0),
                i.send()
            },
            getUserId: function() {
                return this.userId || (this.userId = cc.sys.localStorage.getItem("userId")),
                this.userId
            }
        };
        e.exports = n,
        cc._RF.pop()
    }
    , {}],
    Observer: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fc2dfp7EnxNaqdkkn6W1ZJS", "Observer");
        var n = {
            subscribe: function(t) {
                this.fns || (this.fns = new Array),
                -1 === this.fns.indexOf(t) && this.fns.push(t),
                cc.log("\u5f53\u524d\u8ba2\u9605\u8005:" + this.fns.length)
            },
            unsubscribe: function(t) {
                this.fns || (this.fns = new Array);
                var e = this.fns.indexOf(t);
                -1 != e && this.fns.splice(e, 1),
                cc.log("\u5f53\u524d\u8ba2\u9605\u8005:" + this.fns.length)
            },
            call: function(t, e) {
                this.fns || (this.fns = new Array),
                this.fns.forEach(function(o, n) {
                    o.key == t && o.call(e)
                })
            }
        };
        e.exports = n,
        cc._RF.pop()
    }
    , {}],
    OfflineDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "984a6AbhFNCS4k2o78qSCi5", "OfflineDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                score: cc.Label
            },
			onLoad:function(){
				//埋点 没有激励执行下面，关闭此dialog
				//this.dismiss();
			},
            start: function() {},
            onShow: function() {
                var t = Math.floor((Date.parse(new Date) - Global.userData.lastSyncTime) / 1e3);
                this.offlineScore = Math.floor(15 * Math.pow(1.6, Global.userData.maxLevel) * t),
                this.score.string = this.formatScore(this.offlineScore)
            },
            treble: function() {
                this.clickable && (cc.MainGame.addStar(-3) ? (cc.MainGame.addScore(3 * this.offlineScore),
                this.dismiss()) : this.showToast("\u661f\u661f\u4e0d\u8db3"))
            },
            onDismiss: function() {
                cc.MainGame.saveUserData()
            },
            single: function() {
                this.clickable && (cc.MainGame.addScore(this.offlineScore),
                this.dismiss())
            },
            double: function() {
                var t = this;
                this.clickable && this.adsManager.showAd({
                    success: function() {
                        cc.MainGame.addScore(2 * t.offlineScore),
                        t.dismiss()
                    },
                    failed: function() {}
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    Position: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "98226b8MB9B6I5tvKDnpRTR", "Position"),
        cc.Class({
            extends: cc.Component,
            properties: {
                position: 0
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    PromotionAnimDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "18a9ajTsYRC+p8OeduibycU", "PromotionAnimDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                icon: cc.Node
            },
            start: function() {},
            onShow: function() {
                this.icon.getComponent(cc.Sprite).spriteFrame = cc.MainGame.promotionAnimFrames[Global.userData.promotion - 1];
                var t = [];
                this.icon.x = 0,
                this.icon.y = -343,
                this.icon.scaleX = 0,
                this.icon.scaleY = 0;
                var e = cc.scaleTo(1, 1);
                e.easing(cc.easeElasticOut()),
                t.push(e),
                t.push(cc.scaleTo(.5, 1));
                var o = cc.spawn(cc.moveTo(.3, -480, -100), cc.scaleTo(.3, 0));
                o.easing(cc.easeBackIn()),
                t.push(o);
                var n = this
                  , i = cc.callFunc(function() {
                    n.dismiss()
                });
                t.push(i),
                this.icon.runAction(cc.sequence(t))
            },
            onDismiss: function() {
                cc.MainGame.setPromotion(),
                cc.boxFactory.clearAllBoxs()
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    PromotionDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c663aE1p2FEqrdvyrWCcf2i", "PromotionDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                before: cc.Node,
                after: cc.Node,
                promotionLabel: cc.Label,
                attackLabel: cc.Label,
                starLabel: cc.Label
            },
            start: function() {
				
				console.log(this.node);
				
				
				var btn_watchadtorecievedouble = cc.find("Seqanimbody/btn_watchadtorecievedouble", this.node);
				
				//埋单 激励用完隐藏 不用定时
				//btn_watchadtorecievedouble.active = 0;
			},
            onShow: function() {
                this.beforeConfig = cc.MainGame.promotionJson.json.promotions[Global.userData.promotion],
                this.afterConfig = cc.MainGame.promotionJson.json.promotions[Global.userData.promotion + 1],
                this.before.getComponent(cc.Sprite).spriteFrame = cc.MainGame.promotionFrames[Global.userData.promotion],
                this.after.getComponent(cc.Sprite).spriteFrame = cc.MainGame.promotionFrames[Global.userData.promotion + 1],
                this.promotionLabel.string = this.afterConfig.name,
                this.attackLabel.string = "+" + this.afterConfig.reward.attack + "%",
                this.starLabel.string = "+" + this.afterConfig.reward.star,
                Global.userData.promotion++
            },
            onDismiss: function() {
                cc.dialogManager.showGameDialogByArgs("PromotionAnimDialog", Global.userData.promotion)
            },
            reward: function() {
                this.clickable && (Global.userData._star += this.afterConfig.reward.star,
                Global.userData.attackByPromotionUp = Global.userData.attackByPromotionUp * (100 + this.afterConfig.reward.attack) / 100,
                this.dismiss())
            },
            rewardDouble: function() {
                var t = this;
                this.clickable && this.adsManager.showAd({
                    success: function() {
                        Global.userData._star += 2 * t.afterConfig.reward.star,
                        Global.userData.attackByPromotionUp = Global.userData.attackByPromotionUp * (100 + 2 * t.afterConfig.reward.attack) / 100,
                        t.dismiss()
                    },
                    failed: function() {}
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    RewardedVideoAd: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4af75c7H29PB5mtL96mV0Qw", "RewardedVideoAd"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var t = this;
                if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                    wx.getSystemInfoSync();
                    cc.log("\u5fae\u4fe1SDKVersion:" + SDK),
                    RewardedVideoAd.load(),
                    this.onError = function(e, o) {
                        wx.showToast({
                            title: "\u5e7f\u544a\u64ad\u653e\u5931\u8d25,\u9519\u8bef\u7801:" + o + "\uff0c\u539f\u56e0:" + e,
                            icon: "none"
                        }),
                        t.fn.onError(e, o)
                    }
                    ,
                    this.onClose = function(e) {
                        t.fn.onClose(e)
                    }
                }
            },
            show: function(t) {
                this.fn = t,
                cc.sys.platform === cc.sys.WECHAT_GAME && (RewardedVideoAd.show(),
                RewardedVideoAd.onError(this.onError),
                RewardedVideoAd.onError(this.onClose))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SVBetter: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6c5fdxTz0dDXqHZb8xX8wKX", "SVBetter"),
        cc.Class({
            extends: cc.Component,
            properties: {
                item: cc.Prefab,
                content: cc.Node,
                scrollView: cc.Node,
                maskNode: cc.Node
            },
            start: function() {
                this.scrollView.on("scroll-to-bottom", function() {
                    cc.log("\u6eda\u52a8\u5230\u5217\u8868\u5e95\u90e8\u4e86")
                }
                .bind(this))
            },
            createList: function(t, e) {
                this.data = t,
                this.jsName = e,
                this.itemHeight = cc.instantiate(this.item).height,
                this.topIndex = 0;
                var o = Math.floor(this.scrollView.height / this.itemHeight) + 2
                  , n = o + 1;
                o > t.length && (n = o = t.length),
                this.bottomIndex = o,
                this.offsetY = this.itemHeight / 2;
                var i = this.scrollView.position;
                this.topExtremeDistance = i.y + this.scrollView.height / 2 + this.offsetY,
                this.bottomExtremeDistance = i.y - this.scrollView.height / 2 - this.offsetY,
                this.itemsArr = [];
                for (var a = 0; a < n; a++) {
                    var s = cc.instantiate(this.item);
                    s.parent = this.content,
                    this.updateItem(s, this.data[a], a)
                }
                this.content.height = t.length * this.itemHeight
            },
            updateItem: function(t, e, o) {
                t.y = -o * this.itemHeight - this.itemHeight / 2,
                t.getComponent(this.jsName).updateUI(e),
                this.itemsArr[o] = t
            },
            updateItemsPos: function(t) {
                if (this.itemsArr && this.itemsArr[this.bottomIndex]) {
                    var e = this.itemsArr[this.topIndex].convertToWorldSpaceAR(cc.v2(0, 0)).sub(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2))
                      , o = this.itemsArr[this.bottomIndex].convertToWorldSpaceAR(cc.v2(0, 0)).sub(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2));
                    if (e.y > this.topExtremeDistance) {
                        if (this.bottomIndex >= this.data.length - 1)
                            return;
                        this.updateItem(this.itemsArr[this.topIndex], this.data[this.bottomIndex + 1], this.bottomIndex + 1),
                        this.topIndex++,
                        this.bottomIndex++
                    } else if (o.y < this.bottomExtremeDistance) {
                        if (this.topIndex < 1)
                            return;
                        this.updateItem(this.itemsArr[this.bottomIndex], this.data[this.topIndex - 1], this.topIndex - 1),
                        this.topIndex--,
                        this.bottomIndex--
                    }
                }
            },
            onBtnClk: function(t, e) {
                switch (e) {
                case "back":
                    this.node.destroy();
                    break;
                case "mask":
                    this.maskNode.getComponent(cc.Mask).enabled = !this.maskNode.getComponent(cc.Mask).enabled
                }
            },
            update: function(t) {
                this.updateItemsPos(t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SellDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7aff3WbK3FKHqFC/G4U1PYx", "SellDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                icon: cc.Sprite,
                price: cc.Label
            },
            start: function() {},
            onShow: function() {
                this.icon.spriteFrame = cc.cannonFactory.cannonFrames[this.args._level - 1],
                this.scoreTx = this.formatScore(.5 * this.args._score),
                this.price.string = this.scoreTx
            },
            confirm: function() {
                cc.MainGame.savePosition(0, this.args._node),
                cc.cannonFactory.recycler(this.args._node),
                cc.MainGame.addScore(.5 * this.args._score),
                cc.MainGame.showToast("\u5356\u51fa\u70ae\u53f0\u83b7\u5f97" + this.scoreTx + "\u91d1\u5e01"),
                this.dismiss()
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    SettingDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "cc0fbhOoktJdq1XZ1fVuq75", "SettingDialog");
        var n = t("LocalStorage");
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                shakeFrames: [cc.SpriteFrame],
                soundFrames: [cc.SpriteFrame],
                shakeSprite: cc.Sprite,
                soundSprite: cc.Sprite
            },
            onLoad: function() {
				
			},
            start: function() {
				var shakeBtn = cc.find("Animbody", this.node);
				//埋点 激励用完隐藏。 不用定时
				//shakeBtn.children[1].active = 0;
			},
            onShow: function() {
                this.setShakeFrame(),
                this.setSoundFrame()
            },
            setShakeFrame: function() {
                Global.userConfig.isShake ? this.shakeSprite.spriteFrame = this.shakeFrames[1] : this.shakeSprite.spriteFrame = this.shakeFrames[0]
            },
            setSoundFrame: function() {
                Global.userConfig.isSound ? this.soundSprite.spriteFrame = this.soundFrames[1] : this.soundSprite.spriteFrame = this.soundFrames[0]
            },
            shakeClick: function() {
                this.clickable && (Global.userConfig.isShake = !Global.userConfig.isShake,
                this.setShakeFrame(),
                n.save("userConfig", Global.userConfig))
            },
            soundClick: function() {
                this.clickable && (Global.userConfig.isSound = !Global.userConfig.isSound,
                cc.MainGame.playBgm(),
                this.setSoundFrame(),
                n.save("userConfig", Global.userConfig))
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog",
        LocalStorage: "LocalStorage"
    }],
    SignDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f47f38lA2ZP6YIWpwIqT0Tk", "SignDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                signList: cc.Node,
                signed: cc.Node,
                unsigned: cc.Node
            },
            start: function() {
				var btn_signwatchad = cc.find("Animbody/未签到/btn_signwatchad", this.node);
				
				//埋点 激励用完隐藏。 不用定时
			//	btn_signwatchad.active = 0;
				
			},
            onShow: function() {
                this.signStarCount = [5, 7, 10, 15, 20, 30, 40],
                this.currentDate = this.getTodayDate(),
                this.initSignState()
            },
            initSignState: function() {
                this.currentDate > Global.userData.lastSignDate ? (this.signed.active = !1,
                this.unsigned.active = !0,
                Global.userData.signDays >= 7 && (Global.userData.signDays = 0)) : (this.signed.active = !0,
                this.unsigned.active = !1);
                for (var t = 0; t < Global.userData.signDays; t++)
                    this.signList.children[t].children[1].active = !0
            },
            sign: function() {
                this.clickable && (cc.MainGame.addStar(this.signStarCount[Global.userData.signDays]),
                Global.userData.signDays++,
                Global.userData.lastSignDate = this.currentDate,
                this.initSignState(),
                cc.MainGame.saveUserData())
            },
            signDouble: function() {
                var t = this;
                this.clickable && this.adsManager.showAd({
                    success: function() {
                        cc.MainGame.addStar(2 * t.signStarCount[Global.userData.signDays]),
                        Global.userData.signDays++,
                        Global.userData.lastSignDate = t.currentDate,
                        t.initSignState(),
                        cc.MainGame.saveUserData()
                    },
                    failed: function() {}
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    SpeedUpDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b8c95aN7UlIr4D19zclgQV5", "SpeedUpDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                timeLabel: cc.Label,
                progressBar: cc.ProgressBar
            },
            start: function() {
				var btn_watchadtoget_small = cc.find("Seqanimbody/btn_watchadtoget_small", this.node);
				
				//埋点 激励用完隐藏。 不用定时
				//btn_watchadtoget_small.active = 0;
			},
            onShow: function() {
                this.time = 0,
                this.showSpeedUpAnim = !1,
                this.freshProgress()
            },
            speedUpFree: function() {
                var t = this;
                this.clickable && this.adsManager.showAd({
                    success: function() {
                        t.addSpeedUp()
                    },
                    failed: function() {}
                })
            },
            speedUpByStar: function() {
                this.clickable && cc.MainGame.addStar(-3) && this.addSpeedUp()
            },
            addSpeedUp: function() {
                Global.userData.speedUpEndTime = Date.parse(new Date) + 15e4,
                this.dismiss(),
                cc.dialogManager.showGameDialogByArgs("TurntableResultDialog", 6)
            },
            onDismiss: function() {},
            freshProgress: function() {
                var t = (Global.userData.speedUpEndTime - Date.parse(new Date)) / 1e3;
                if (t > 0) {
                    var e = Math.floor(t / 60)
                      , o = t % 60;
                    this.timeLabel.string = (e < 10 ? "0" + e : e) + ":" + (o < 10 ? "0" + o : o),
                    this.progressBar.progress = t / 150
                } else
                    this.timeLabel.string = "00:00",
                    this.progressBar.progress = 0
            },
            update: function(t) {
                this.time += t,
                this.time > 1 && (this.time = 0,
                this.freshProgress())
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    SpriteFrameSet: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
        var n = cc.Class({
            name: "SpriteFrameSet",
            properties: {
                language: "",
                spriteFrame: cc.SpriteFrame
            }
        });
        e.exports = n,
        cc._RF.pop()
    }
    , {}],
    StoreDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "deb8bWB469I6b18WGX6SM7Z", "StoreDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                score: cc.Label,
                starCount: cc.Label,
                tabSpriteFrames: [cc.SpriteFrame],
                tab: cc.Sprite,
                cannonListNode: cc.Node,
                privilegeListNode: cc.Node,
                cannonListContent: cc.Node,
                privilegeListContent: cc.Node,
                cannonIten: cc.Prefab,
                privilegeItem: cc.Prefab,
                tabLab1: cc.Node,
                tabLab2: cc.Node
            },
            changeTab: function(t, e) {
                switch (e = parseInt(e)) {
                case 0:
                    this.tab.spriteFrame = this.tabSpriteFrames[0],
                    this.cannonListNode.active = !0,
                    this.privilegeListNode.active = !1,
                    this.tabLab1.color = new cc.color(255,255,255,255),
                    this.tabLab2.color = new cc.color(255,255,255,70);
                    break;
                case 1:
                    this.tab.spriteFrame = this.tabSpriteFrames[1],
                    this.cannonListNode.active = !1,
                    this.privilegeListNode.active = !0,
                    this.tabLab1.color = new cc.color(255,255,255,70),
                    this.tabLab2.color = new cc.color(255,255,255,255)
                }
            },
            onLoad: function() {},
            onShow: function() {
                if (this.score.string = this.formatScore(Global.userData.score),
                this.starCount.string = Global.userData.star,
                0 == this.cannonListContent.childrenCount) {
                    var t = cc.cannonFactory.cannonJson.json.cannons;
                    for (var e in t) {
                        var o = t[e]
                          , n = cc.instantiate(this.cannonIten);
                        n.getComponent("cannonItem").setConfig(e, o),
                        this.cannonListContent.addChild(n)
                    }
                    for (var i = 0; i < 18; i++) {
                        var a = cc.instantiate(this.privilegeItem);
                        a.getComponent("vipItem").setConfig(i),
                        this.privilegeListContent.addChild(a)
                    }
                } else {
                    var s = !0
                      , c = !1
                      , r = void 0;
                    try {
                        for (var l, h = this.cannonListContent.children[Symbol.iterator](); !(s = (l = h.next()).done); s = !0) {
                            l.value.getComponent("cannonItem").start()
                        }
                    } catch (t) {
                        c = !0,
                        r = t
                    } finally {
                        try {
                            !s && h.return && h.return()
                        } finally {
                            if (c)
                                throw r
                        }
                    }
                }
                var u = this;
                this.scoreListener = {
                    key: "score",
                    call: function(t) {
                        u.score.string = u.formatScore(t)
                    }
                },
                this.starListener = {
                    key: "star",
                    call: function(t) {
                        u.starCount.string = t
                    }
                },
                this.maxLevelListener = {
                    key: "maxLevel",
                    call: function(t) {
                        var e = !0
                          , o = !1
                          , n = void 0;
                        try {
                            for (var i, a = u.cannonListContent.children[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                                i.value.getComponent("cannonItem").start()
                            }
                        } catch (t) {
                            o = !0,
                            n = t
                        } finally {
                            try {
                                !e && a.return && a.return()
                            } finally {
                                if (o)
                                    throw n
                            }
                        }
                    }
                },
                this.vipBuyListener = {
                    key: "vip",
                    call: function(t) {
                        if (1 == t) {
                            var e = !0
                              , o = !1
                              , n = void 0;
                            try {
                                for (var i, a = u.cannonListContent.children[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                                    i.value.getComponent("cannonItem").start()
                                }
                            } catch (t) {
                                o = !0,
                                n = t
                            } finally {
                                try {
                                    !e && a.return && a.return()
                                } finally {
                                    if (o)
                                        throw n
                                }
                            }
                        }
                        var s = !0
                          , c = !1
                          , r = void 0;
                        try {
                            for (var l, h = u.privilegeListContent.children[Symbol.iterator](); !(s = (l = h.next()).done); s = !0) {
                                l.value.getComponent("vipItem").start()
                            }
                        } catch (t) {
                            c = !0,
                            r = t
                        } finally {
                            try {
                                !s && h.return && h.return()
                            } finally {
                                if (c)
                                    throw r
                            }
                        }
                    }
                },
                cc.observer.subscribe(this.scoreListener),
                cc.observer.subscribe(this.starListener),
                cc.observer.subscribe(this.maxLevelListener),
                cc.observer.subscribe(this.vipBuyListener)
            },
            onDismiss: function() {
                cc.observer.unsubscribe(this.scoreListener),
                cc.observer.unsubscribe(this.starListener),
                cc.observer.unsubscribe(this.maxLevelListener),
                cc.observer.unsubscribe(this.vipBuyListener)
            },
            start: function() {
                this.scheduleOnce(function() {
                    this.changeTab(null, 0)
                }, 0)
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    Toast: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "00006hS7vJDd63aSft6o1zK", "Toast");
        var n = {
            show: function(t) {
                if (cc.sys.platform === cc.sys.WECHAT_GAME)
                    wx.showToast({
                        title: t,
                        icon: "none"
                    });
                else {
                    var e = cc.find("Canvas");
                    if (null == e)
                        return void cc.log("\u65e0\u6cd5\u663e\u793atoast,\u8bf7\u628a\u9876\u5c42\u8282\u70b9\u547d\u540d\u4e3aCanvas");
                    cc.loader.loadRes("toastBg", cc.SpriteFrame, function(o, n) {
                        null != o && cc.log("toast\u80cc\u666f\u663e\u793a\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5resources\u76ee\u5f55\u4e2d\u662f\u5426\u5b58\u5728toastBg\u6587\u4ef6");
                        var i = new cc.Node("Toast");
                        if (null != n) {
                            var a = i.addComponent(cc.Sprite);
                            a.type = cc.Sprite.Type.SLICED,
                            a.spriteFrame = n
                        }
                        var s = i.addComponent(cc.Layout);
                        s.resizeMode = cc.Layout.ResizeMode.CONTAINER,
                        s.padding = 40;
                        var c = new cc.Node("message")
                          , r = c.addComponent(cc.Label);
                        r.fontSize = 30,
                        r.lineHeight = 30,
                        r.string = t,
                        i.addChild(c),
                        s.scheduleOnce(function() {
                            var t = cc.callFunc(function() {
                                i.removeFromParent(!0)
                            });
                            i.runAction(cc.sequence(cc.spawn(cc.moveBy(.4, 0, 50), cc.fadeTo(.4, 0)), t))
                        }, 2),
                        e.addChild(i)
                    })
                }
            }
        };
        e.exports = n,
        cc._RF.pop()
    }
    , {}],
    TouchEvent: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "75ec2tOmqhOPJMeJjmEg4GV", "TouchEvent"),
        cc.Class({
            extends: cc.Component,
            properties: {
                touchMovehNode: cc.Node
            },
            start: function() {
                this.levelCap = 30,
                this.nextNodes = new Array,
                this.addTouchEvent()
            },
            addTouchEvent: function() {
                var t = this
                  , e = 0
                  , o = 0
                  , n = function t() {
                    this.node.x == e && this.node.y == o ? (this.recover(),
                    this.node.off(cc.Node.EventType.TOUCH_MOVE, i, this),
                    this.unschedule(t),
                    cc.log("\u68c0\u6d4b\u4f4d\u7f6e\u5f02\u5e38\uff1atrue")) : (e = this.node.x,
                    o = this.node.y,
                    cc.log("\u68c0\u6d4b\u4f4d\u7f6e\u5f02\u5e38\uff1afalse"))
                }
                  , i = function(t) {
                    this.node.x = this.node.x + t.touch.getLocationX() - this.touchx,
                    this.node.y = this.node.y + t.touch.getLocationY() - this.touchy,
                    this.touchx = t.touch.getLocationX(),
                    this.touchy = t.touch.getLocationY()
                };
                this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
                    this.touchx = t.touch.getLocationX(),
                    this.touchy = t.touch.getLocationY(),
                    this.node.getComponent("Cannon").stopFire(),
                    this.node.on(cc.Node.EventType.TOUCH_MOVE, i, this),
                    this.schedule(n, .3)
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_END, function(t) {
                    this.node.off(cc.Node.EventType.TOUCH_MOVE, i, this),
                    this.unschedule(n),
                    this.node.getComponent("Cannon").startFire();
                    parseInt(this.node.parent.name);
                    if (this.nextNodes.length > 0) {
                        var e = this.nextNodes[this.nextNodes.length - 1]
                          , o = this.nextNodes[this.nextNodes.length - 1].node;
                        if (e.tag < 15) {
                            var a = e.tag > 4 ? 0 : 2;
                            if (o.childrenCount > a) {
                                var s = o.children[e.tag > 4 ? 0 : 1];
                                if ("cannon" != s.group)
                                    this.recover();
                                else if (s.getComponent("Cannon").level >= this.levelCap)
                                    console.log("\u5df2\u7ecf\u5230\u8fbe\u7b49\u7ea7\u4e0a\u9650,\u65e0\u6cd5\u5347\u7ea7"),
                                    this.recover();
                                else if (s != this.node && s.getComponent("Cannon").level == this.node.getComponent("Cannon").level)
                                    cc.cannonFactory.recycler(this.node),
                                    s.getComponent("Cannon").levelUp(),
                                    cc.MainGame.guideExecute();
                                else {
                                    this.node.stopAllActions(),
                                    s.stopAllActions(),
                                    s.parent = this.node.parent,
                                    this.node.parent = o,
                                    s.setSiblingIndex(parseInt(s.parent.name) <= 4 ? 1 : 0),
                                    this.node.setSiblingIndex(parseInt(this.node.parent.name) <= 4 ? 1 : 0),
                                    cc.MainGame.savePosition(1, this.node),
                                    cc.MainGame.savePosition(1, s);
                                    var c = parseInt(this.node.parent.name);
                                    this.node.angle = c > 4 ? -45 : 0,
                                    this.node.x = c > 4 ? -39 : 0,
                                    this.node.y = c > 4 ? -39 : 20,
                                    c = parseInt(s.parent.name),
                                    s.angle = c > 4 ? -45 : 0,
                                    s.x = c > 4 ? -39 : 0,
                                    s.y = c > 4 ? -39 : 20
                                }
                            } else
                                this.node.stopAllActions(),
                                cc.MainGame.savePosition(0, this.node),
                                this.node.parent = null,
                                this.node.parent = o,
                                cc.MainGame.savePosition(1, this.node),
                                this.node.angle = e.tag > 4 ? -45 : 0,
                                this.node.x = e.tag > 4 ? -39 : 0,
                                this.node.y = e.tag > 4 ? -39 : 20,
                                this.node.setSiblingIndex(parseInt(this.node.parent.name) <= 4 ? 1 : 0),
                                this.node.runAction(cc.moveTo(.3, e.tag > 4 ? -39 : 0, e.tag > 4 ? -39 : 20)),
                                this.node.runAction(cc.rotateTo(.3, e.tag > 4 ? 45 : 0)),
                                cc.MainGame.guideExecute()
                        } else if (20 == e.tag) {
                            var r = this.node.getComponent("Cannon").level
                              , l = cc.MainGame.buyCountMap.get(r)
                              , h = cc.MainGame.getCannonPrice(r, l);
                            cc.dialogManager.showGameDialogByArgs("SellDialog", {
                                _level: r,
                                _score: h,
                                _node: this.node
                            }),
                            this.recover()
                        } else
                            this.recover()
                    } else
                        this.recover()
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
                    t.node.off(cc.Node.EventType.TOUCH_MOVE, i, t),
                    t.unschedule(n),
                    t.recover()
                }, this)
            },
            recover: function() {
                this.node.getComponent("Cannon").startFire();
                var t = parseInt(this.node.parent.name);
                this.node.runAction(cc.moveTo(.2, t > 4 ? -39 : 0, t > 4 ? -39 : 20))
            },
            getCannonPrice: function(t, e) {
                var o = void 0;
                return e ? o = 100 * Math.pow(20, t - 1) * Math.pow(1.07, e) : (o = 100 * Math.pow(20, t - 1),
                cc.MainGame.buyCountMap.set(t, 0)),
                o
            },
            onCollisionEnter: function(t, e) {
                this.nextNodes && this.nextNodes.push(t)
            },
            onCollisionExit: function(t, e) {
                for (var o = 0; o < this.nextNodes.length; o++)
                    this.nextNodes[o] == t && this.nextNodes.splice(o, 1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TurntableDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "604aeYRwQdGlIM4zPjQFwHZ", "TurntableDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                turntable: cc.Node,
                freeCountLab: cc.Label
            },
			onLoad:function(){
				
				var videoBtn = cc.find("Animbody/backboard_luckywheel", this.node);
				
				//埋点 激励用完隐藏。 需要定时
				this.TimeCheckAd = setInterval(function(){
					//	videoBtn.children[3].active = 0;
				}, 500);
			},
			onDestroy:function(){
				clearInterval(this.TimeCheckAd);
			},
            start: function() {},
            onShow: function() {
                this.getTodayDate() > Global.userData.lastTurntableDate && (Global.userData.turntableFreeCount = 3),
                this.freeCountLab.string = Global.userData.turntableFreeCount + "/3"
            },
            turnFree: function() {
                var t = this;
                Global.userData.turntableFreeCount > 0 ? this.adsManager.showAd({
                    success: function() {
                        Global.userData.lastTurntableDate = t.getTodayDate(),
                        t.freeCountLab.string = --Global.userData.turntableFreeCount + "/3",
                        t.turn()
                    },
                    failed: function() {}
                }) : cc.MainGame.showToast("\u514d\u8d39\u6b21\u6570\u4e0d\u8db3")
            },
            turnByStar: function() {
                this.clickable && cc.MainGame.addStar(-6) && this.turn()
            },
            turn: function() {
                if (this.clickable) {
                    this.clickable = !1,
                    this.result = Math.floor(6 * Math.random());
                    var t = 360 * (8 + Math.floor(6 * Math.random())) + 60 * this.result - 30 + 60 * Math.random()
                      , e = cc.rotateTo(5, t);
                    e.easing(cc.easeExponentialInOut());
                    var o = this
                      , n = cc.callFunc(function() {
                        o.clickable = !0,
                        o.showResult()
                    })
                      , i = cc.sequence(e, n);
                    this.turntable.runAction(i)
                }
            },
            showResult: function() {
                switch (cc.dialogManager.showGameDialogByArgs("TurntableResultDialog", this.result),
                this.result) {
                case 0:
                    cc.MainGame.addStar(20);
                    break;
                case 1:
                    for (var t = 0; t < 4; t++)
                        cc.MainGame.addCannon(null, -1);
                    break;
                case 2:
                    Global.userData.fiveTimesIncomeEndTime < Date.parse(new Date) ? Global.userData.fiveTimesIncomeEndTime = Date.parse(new Date) + 15e4 : Global.userData.fiveTimesIncomeEndTime += 15e4,
                    cc.MainGame.coinRainNode.active = !0;
                    break;
                case 3:
                    var e = 15 * Math.pow(1.1, Global.userData.maxLevel) * 3600 * 24;
                    cc.MainGame.addScore(e),
                    cc.MainGame.coinStarAnim.AddGoldAnim(null, 1);
                    break;
                case 4:
                    Global.userData.speedUpEndTime < Date.parse(new Date) ? Global.userData.speedUpEndTime = Date.parse(new Date) + 15e4 : Global.userData.speedUpEndTime += 15e4;
                    break;
                case 5:
                    var o = 15 * Math.pow(1.1, Global.userData.maxLevel) * 3600 * 4;
                    cc.MainGame.addScore(o),
                    cc.MainGame.coinStarAnim.AddGoldAnim(null, 1)
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    TurntableResultDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "966ffAUMOtAiLCYqsw1ctZS", "TurntableResultDialog"),
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                resultFrames: [cc.SpriteFrame],
                resultSprite: cc.Sprite,
                band: cc.Node,
                text: cc.Node
            },
            start: function() {},
            onShow: function() {
                var t = [[63, 64], [74, 43], [74, 43], [56, 103], [95, 78], [84, 99], [102, 71]];
                this.resultSprite.spriteFrame = this.resultFrames[this.args],
                this.text.active = this.args > 5,
                this.resultSprite.node.x = -985,
                this.resultSprite.node.y = -413;
                var e = cc.fadeIn(.3)
                  , o = cc.moveBy(1, 0, 0)
                  , n = cc.fadeOut(.3)
                  , i = cc.sequence(e, o, n);
                this.band.runAction(i);
                var a = cc.moveTo(.5, t[this.args][0], t[this.args][1]);
                a.easing(cc.easeExponentialInOut());
                var s = cc.moveTo(.6, t[this.args][0], t[this.args][1])
                  , c = cc.moveTo(.5, 995, 571);
                c.easing(cc.easeExponentialInOut());
                var r = cc.sequence(a, s, c);
                this.resultSprite.node.runAction(r),
                this.scheduleOnce(function() {
                    this.dismiss()
                }, 1.6)
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog"
    }],
    UFO: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3425ewKhQ9E174PW3/8BFpk", "UFO"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                this.timeInterval = 20,
                this.scheduleOnce(function() {
                    this.startAnim()
                }, this.timeInterval);
                var t = cc.moveBy(1, 0, 100)
                  , e = cc.moveBy(1, 0, -100)
                  , o = cc.repeatForever(cc.sequence(t, e));
                this.node.runAction(o)
            },
            startAnim: function() {
                var t = [];
                t.push(cc.rotateTo(.6, 0));
                var e = cc.moveBy(6, -1158, 0);
                t.push(e);
                for (var o = 0; o < 5; o++) {
                    var n = cc.rotateTo(.6, 60)
                      , i = cc.moveBy(5, 660, 0)
                      , a = cc.rotateTo(.6, 0)
                      , s = cc.moveBy(5, -660, 0);
                    t.push(n),
                    t.push(i),
                    t.push(a),
                    t.push(s)
                }
                t.push(cc.rotateTo(.6, 60));
                var c = cc.moveBy(6, 1158, 0);
                t.push(c);
                var r = this
                  , l = cc.callFunc(function() {
                    r.finished()
                });
                t.push(l);
                var h = cc.sequence(t);
                this.node.runAction(h)
            },
            finished: function() {
                this.scheduleOnce(function() {
                    this.startAnim()
                }, this.timeInterval)
            },
            onClick: function() {
                this.node.x = 828,
                this.node.y = -1185,
                this.node.stopAllActions(),
                this.finished();
                var t = cc.moveBy(1, 0, 100)
                  , e = cc.moveBy(1, 0, -100)
                  , o = cc.repeatForever(cc.sequence(t, e));
                this.node.runAction(o),
                cc.dialogManager.showGameDialog(null, "GiftDialog")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Welcome: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a2291Nzv4FEaZzRN0yfBFFB", "Welcome");
        var n = t("NetApi")
          , i = t("LocalStorage");
        cc.Class({
            extends: t("BaseUtils"),
            properties: {
                progressBar: cc.ProgressBar
            },
            onLoad: function() {
				this.autoAdapteScreen();
                if (cc.gameFrame = 30,
                cc.game.setFrameRate(cc.gameFrame),
                cc.sys.platform === cc.sys.WECHAT_GAME) {
                    var t = wx.getLaunchOptionsSync();
                    if (console.log(t, 333),
                    t.query.hasOwnProperty("wxgamecid"))
                        try {
                            wx.setStorageSync("wxgamecid", t.query.wxgamecid)
                        } catch (t) {}
                    else
                        wx.setStorageSync("wxgamecid", "default")
                }
                if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                    "undefined" != typeof tt && (imgeUr = "https://sf1-ttcdn-tos.pstatp.com/img/developer/app/ttd2e9a4544dc311c3/si893c33b~noop.image")
                }
                this.tryTime = 0
            },
			autoAdapteScreen:function(){
				// 适配解决方案
				let _canvas = cc.Canvas.instance;
			// 设计分辨率比
				let _rateR = _canvas.designResolution.height/_canvas.designResolution.width;
			// 显示分辨率比
				let _rateV = cc.winSize.height/cc.winSize.width;
				console.log("winSize: rateR: "+_rateR+" rateV: "+_rateV);
				if (_rateV > _rateR)
				{
					_canvas.fitHeight = false;
					_canvas.fitWidth = true;
					console.log("winSize: fitWidth");
				}
				else
				{
					_canvas.fitHeight = true;
					_canvas.fitWidth = false;
					console.log("winSize: fitHeight");
				}
			},
            showLoadFailed: function() {
                "undefined" != typeof tt || cc.sys.platform === cc.sys.WECHAT_GAME && wx.showModal({
                    title: "\u63d0\u793a",
                    content: "\u6e38\u620f\u6570\u636e\u83b7\u53d6\u5931\u8d25\uff0c\u624b\u52a8\u5173\u95ed\u540e\u518d\u8bd5",
                    showCancel: !1,
                    success: function(t) {
                        wx.clearStorageSync()
                    }
                })
            },
            waitUserData: function() {
                var t = this;
                t.scheduleOnce(function() {
                    null == Global.userData ? (t.tryTime++,
                    t.tryTime > 20 ? t.showLoadFailed() : t.waitUserData()) : t.startScene("game", null)
                }, .5)
            },
            start: function() {
                var t = this;
                cc.director.preloadScene("game", function(e, o, n) {
                    t.progressBar.progress = e / o
                }, function(e, o) {
                    null == Global.userData ? t.waitUserData() : t.startScene("game", null)
                }),
                cc.log("\u83b7\u53d6userId"),
                n.addUser({
                    success: function(e) {
                        null != e ? (cc.log("\u5fae\u4fe1userId:" + e.data.openId),
                        cc.sys.localStorage.setItem("userId", e.data.openId),
                        i.initObject("userData", function() {
                            t.initUserData()
                        }),
                        i.initObject("explore"),
                        i.initMap("position"),
                        i.initMap("buyCount"),
                        i.initMap("starReceive"),
                        Global.explore = i.read("explore"),
                        t.readUserConfig()) : cc.log("\u6ce8\u518c\u5931\u8d25")
                    },
                    failed: function(t, e) {
                        cc.log(t + "," + e)
                    }
                })
            },
            readUserConfig: function() {
                Global.userConfig = {};
                var t = i.read("userConfig")
                  , e = null === t;
                Global.userConfig.isShake = !(!e && null != t.isShake) || t.isShake,
                Global.userConfig.isSound = !(!e && null != t.isSound) || t.isSound
            },
            initUserData: function() {
                Global.userData = {};
                var t = {
                    _score: {
                        set: function(t) {
                            this.score = t,
                            cc.observer.call("score", t)
                        },
                        get: function() {
                            return this.score
                        }
                    },
                    _star: {
                        set: function(t) {
                            this.star = t,
                            cc.observer.call("star", t)
                        },
                        get: function() {
                            return this.star
                        }
                    },
                    _maxLevel: {
                        set: function(t) {
                            this.maxLevel = t,
                            cc.observer.call("maxLevel", t)
                        },
                        get: function() {
                            return this.maxLevel
                        }
                    }
                };
                Object.defineProperties(Global.userData, t);
                var e = i.read("userData")
                  , o = null === e;
                Global.firstRun = o,
                Global.userData.signDays = o || !e.signDays ? 0 : e.signDays,
                Global.userData.lastSignDate = o || !e.lastSignDate ? 0 : e.lastSignDate,
                Global.userData.promotion = o || !e.promotion ? 0 : e.promotion,
                Global.userData.score = o || !e.score ? 500 : e.score,
                Global.userData.star = o || !e.star ? 0 : e.star,
                Global.userData.maxLevel = o || !e.maxLevel ? 0 : e.maxLevel,
                Global.userData.speedUpEndTime = o || !e.speedUpEndTime ? 0 : e.speedUpEndTime,
                Global.userData.autoMegraEndTime = o || !e.autoMegraEndTime ? 0 : e.autoMegraEndTime,
                Global.userData.fiveTimesIncomeEndTime = o || !e.fiveTimesIncomeEndTime ? 0 : e.fiveTimesIncomeEndTime,
                Global.userData.savingPotCoinCount = o || !e.savingPotCoinCount ? 0 : e.savingPotCoinCount,
                Global.userData.lastSyncTime = o || !e.lastSyncTime ? Date.parse(new Date) : e.lastSyncTime,
                Global.userData.turntableFreeCount = o || !e.turntableFreeCount ? 3 : e.turntableFreeCount,
                Global.userData.lastTurntableDate = o || !e.lastTurntableDate ? 3 : e.lastTurntableDate,
                Global.userData.lastReceiveStarData = o || !e.lastReceiveStarData ? 3 : e.lastReceiveStarData,
                Global.userData.attackByPromotionUp = o || !e.attackByPromotionUp ? 1 : e.attackByPromotionUp,
                Global.userData.attacKByVip = o || !e.attacKByVip ? 1 : e.attacKByVip,
                Global.userData.vipPreferBuyCount = o || !e.vipPreferBuyCount ? 0 : e.vipPreferBuyCount,
                Global.userData.vipAttackBuyCount = o || !e.vipAttackBuyCount ? 0 : e.vipAttackBuyCount,
                Global.userData.preferByVip = o || !e.vipAttackBuyCount ? 1 : e.vipAttackBuyCount
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseUtils: "BaseUtils",
        LocalStorage: "LocalStorage",
        NetApi: "NetApi"
    }],
    cannonItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "97f98Hms01OIZaliQCtqnIE", "cannonItem");
        t("LocalStorage");
        cc.Class({
            extends: t("BaseUtils"),
            properties: {
                coinBuyBtn: cc.Node,
                starBuyBtn: cc.Node,
                unBuyBtn: cc.Node,
                coinLabel: cc.Label,
                starLabel: cc.Label,
                icon: cc.Node,
                speedBar: cc.ProgressBar,
                attackBar: cc.ProgressBar,
                unknowIcon: cc.SpriteFrame
            },
            setConfig: function(t, e) {
                this.index = parseInt(t),
                this.config = e
            },
            start: function() {
                if (this.speedBar.progress = .05 / this.config.fireInterval,
                this.attackBar.progress = Math.sqrt(this.config.attack) / 1e3,
                Global.userData.maxLevel < 6)
                    switch (this.index) {
                    case 0:
                        this.showCoinBtn();
                        break;
                    case 1:
                    case 2:
                        this.showStarBtn();
                        break;
                    default:
                        this.showUnBuyBtn()
                    }
                else
                    this.config.level < Global.userData.maxLevel - 4 ? this.showCoinBtn() : this.config.level < Global.userData.maxLevel - 1 ? this.showStarBtn() : this.showUnBuyBtn()
            },
            showCoinBtn: function() {
                this.icon.getComponent(cc.Sprite).spriteFrame = cc.cannonFactory.cannonFrames[this.config.level - 1],
                this.coinBuyBtn.active = !0,
                this.starBuyBtn.active = !1,
                this.unBuyBtn.active = !1;
                var t = cc.MainGame.buyCountMap.get(this.config.level);
                this.price = cc.MainGame.getCannonPrice(this.config.level, t) * Global.userData.preferByVip,
                t || cc.MainGame.buyCountMap.set(this.config.level, 0),
                this.coinLabel.string = this.formatScore(Math.floor(this.price))
            },
            coinBuy: function() {
                Global.userData.score < this.price ? cc.MainGame.showToast("\u91d1\u5e01\u4e0d\u8db3") : cc.MainGame.addCannon(null, this.config.level) ? cc.MainGame.addScore(-this.price) && (this.showCoinBtn(),
                cc.MainGame.setNextPrice(),
                cc.MainGame.showToast("\u8d2d\u4e70\u6210\u529f")) : cc.MainGame.showToast("\u8d2d\u4e70\u5931\u8d25\uff0c\u7a7a\u4f4d\u4e0d\u8db3")
            },
            showStarBtn: function() {
                this.icon.getComponent(cc.Sprite).spriteFrame = cc.cannonFactory.cannonFrames[this.config.level - 1],
                this.coinBuyBtn.active = !1,
                this.starBuyBtn.active = !0,
                this.unBuyBtn.active = !1;
                var t = this.config.level - 2;
                t < 3 && (t = 3),
                this.starLabel.string = t
            },
            starBuy: function() {
                var t = this.config.level - 2;
                t < 3 && (t = 3),
                Global.userData.star < t ? cc.MainGame.showToast("\u661f\u661f\u4e0d\u8db3") : cc.MainGame.addCannon(null, this.config.level) ? (cc.MainGame.addStar(-t),
                cc.MainGame.showToast("\u8d2d\u4e70\u6210\u529f")) : cc.MainGame.showToast("\u8d2d\u4e70\u5931\u8d25\uff0c\u7a7a\u4f4d\u4e0d\u8db3")
            },
            showUnBuyBtn: function() {
                this.icon.getComponent(cc.Sprite).spriteFrame = this.unknowIcon,
                this.speedBar.progress = 0,
                this.attackBar.progress = 0,
                this.coinBuyBtn.active = !1,
                this.starBuyBtn.active = !1,
                this.unBuyBtn.active = !0
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseUtils: "BaseUtils",
        LocalStorage: "LocalStorage"
    }],
    "polyglot.min": [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        (function(t, i) {
            "function" == typeof define && define.amd ? define([], function() {
                return i(t)
            }) : "object" == (void 0 === o ? "undefined" : n(o)) ? e.exports = i(t) : t.Polyglot = i(t)
        }
        )(void 0, function(t) {
            function e(t) {
                t = t || {},
                this.phrases = {},
                this.extend(t.phrases || {}),
                this.currentLocale = t.locale || "en",
                this.allowMissing = !!t.allowMissing,
                this.warn = t.warn || l
            }
            function o(t) {
                var e, o, n, i = {};
                for (e in t)
                    if (t.hasOwnProperty(e))
                        for (n in o = t[e])
                            i[o[n]] = e;
                return i
            }
            function i(t) {
                return t.replace(/^\s+|\s+$/g, "")
            }
            function a(t, e, o) {
                var n, a;
                return null != o && t ? n = i((a = t.split(u))[c(e, o)] || a[0]) : n = t,
                n
            }
            function s(t) {
                var e = o(p);
                return e[t] || e.en
            }
            function c(t, e) {
                return d[s(t)](e)
            }
            function r(t, e) {
                for (var o in e)
                    "_" !== o && e.hasOwnProperty(o) && (t = t.replace(new RegExp("%\\{" + o + "\\}","g"), e[o]));
                return t
            }
            function l(e) {
                t.console && t.console.warn && t.console.warn("WARNING: " + e)
            }
            function h(t) {
                var e = {};
                for (var o in t)
                    e[o] = t[o];
                return e
            }
            e.VERSION = "0.4.3",
            e.prototype.locale = function(t) {
                return t && (this.currentLocale = t),
                this.currentLocale
            }
            ,
            e.prototype.extend = function(t, e) {
                var o;
                for (var i in t)
                    t.hasOwnProperty(i) && (o = t[i],
                    e && (i = e + "." + i),
                    "object" == (void 0 === o ? "undefined" : n(o)) ? this.extend(o, i) : this.phrases[i] = o)
            }
            ,
            e.prototype.clear = function() {
                this.phrases = {}
            }
            ,
            e.prototype.replace = function(t) {
                this.clear(),
                this.extend(t)
            }
            ,
            e.prototype.t = function(t, e) {
                var o, n;
                return "number" == typeof (e = null == e ? {} : e) && (e = {
                    smart_count: e
                }),
                "string" == typeof this.phrases[t] ? o = this.phrases[t] : "string" == typeof e._ ? o = e._ : this.allowMissing ? o = t : (this.warn('Missing translation for key: "' + t + '"'),
                n = t),
                "string" == typeof o && (e = h(e),
                n = r(n = a(o, this.currentLocale, e.smart_count), e)),
                n
            }
            ,
            e.prototype.has = function(t) {
                return t in this.phrases
            }
            ;
            var u = "||||"
              , d = {
                chinese: function(t) {
                    return 0
                },
                german: function(t) {
                    return 1 !== t ? 1 : 0
                },
                french: function(t) {
                    return t > 1 ? 1 : 0
                },
                russian: function(t) {
                    return t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
                },
                czech: function(t) {
                    return 1 === t ? 0 : t >= 2 && t <= 4 ? 1 : 2
                },
                polish: function(t) {
                    return 1 === t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
                },
                icelandic: function(t) {
                    return t % 10 != 1 || t % 100 == 11 ? 1 : 0
                }
            }
              , p = {
                chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                french: ["fr", "tl", "pt-br"],
                russian: ["hr", "ru"],
                czech: ["cs"],
                polish: ["pl"],
                icelandic: ["is"]
            };
            return e
        }),
        cc._RF.pop()
    }
    , {}],
    receiveStarDialog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "78934qC8bhDYb/DVhuupmGW", "receiveStarDialog");
        var n = t("LocalStorage");
        cc.Class({
            extends: t("BaseDialog"),
            properties: {
                starCount: cc.Label,
                residueDegree: cc.Label
            },
			onLoad:function(){
				
				var thisObj = this;
				//埋点 激励用完隐藏。定时
				this.TimeCheckAd = setInterval(function(){
					// 埋点 没有激励 执行
					//thisObj.dismiss();
				}, 500);
				console.log(this.node);
			},
			onDestroy:function(){
				clearInterval(this.TimeCheckAd);
			},
            start: function() {},
            onShow: function() {
                if (0 == cc.MainGame.starReceviedMap.size) {
                    var t = cc.MainGame.starReceiveConfig.json.star;
                    for (var e in t)
                        cc.MainGame.starReceviedMap.set(t[e].count, t[e].times)
                }
                this.setState()
            },
            setState: function() {
                var t = !0
                  , e = !1
                  , o = void 0;
                try {
                    for (var n, i = cc.MainGame.starReceviedMap[Symbol.iterator](); !(t = (n = i.next()).done); t = !0) {
                        var a = n.value;
                        if (a[1] > 0)
                            return this.star = a[0],
                            this.starCount.string = "x" + a[0],
                            void (this.residueDegree.string = "x" + a[1])
                    }
                } catch (t) {
                    e = !0,
                    o = t
                } finally {
                    try {
                        !t && i.return && i.return()
                    } finally {
                        if (e)
                            throw o
                    }
                }
                this.star = 0,
                this.starCount.string = "x0",
                this.residueDegree.string = "x0"
            },
            receive: function() {
                var t = this;
                this.clickable && (0 == this.star ? cc.MainGame.showToast("\u4eca\u65e5\u514d\u8d39\u661f\u661f\u9886\u53d6\u6b21\u6570\u5df2\u8fbe\u4e0a\u9650") : this.adsManager.showAd({
                    success: function() {
                        cc.MainGame.addStar(t.star),
                        cc.MainGame.starReceviedMap.set(t.star, cc.MainGame.starReceviedMap.get(t.star) - 1),
                        n.saveMap("starReceive", cc.MainGame.starReceviedMap),
                        t.setState()
                    },
                    failed: function() {}
                }))
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseDialog: "BaseDialog",
        LocalStorage: "LocalStorage"
    }],
    vipItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "cb3d8AbgnhIfp7HCAAn/iwM", "vipItem"),
        cc.Class({
            extends: t("BaseUtils"),
            properties: {
                attackIcon: cc.Node,
                preferIcon: cc.Node,
                vipname: cc.Label,
                percentLab: cc.Label,
                instroduce: cc.Label,
                priceLab: cc.Label,
                buyBtn: cc.Node,
                unbuyBtn: cc.Node
            },
            setConfig: function(t) {
                this.index = t
            },
            onLoad: function() {
                this.pencents = [5, 5, 15, 10, 25, 20, 35, 40, 50, 70, 55, 110, 60, 160, 65, 225, 70, 500],
                this.level = Math.floor(this.index / 2) + 1
            },
            start: function() {
                this.index % 2 == 0 ? (this.attackIcon.active = !1,
                this.preferIcon.active = !0,
                this.vipname.string = "\u6253\u6298\u5361(lv" + this.level + ")",
                this.instroduce.string = "\u6240\u6709\u673a\u7532\u964d\u4ef7" + this.pencents[this.index] + "%",
                this.level == Global.userData.vipPreferBuyCount + 1 ? (this.buyBtn.active = !0,
                this.unbuyBtn.active = !1) : Global.userData.vipPreferBuyCount >= this.level ? (this.buyBtn.active = !1,
                this.unbuyBtn.active = !0,
                this.unbuyBtn.children[0].active = !0) : (this.buyBtn.active = !1,
                this.unbuyBtn.active = !0,
                this.unbuyBtn.children[0].active = !1)) : (this.attackIcon.active = !0,
                this.preferIcon.active = !1,
                this.vipname.string = "\u5f3a\u5316\u5361(lv" + this.level + ")",
                this.instroduce.string = "\u6240\u6709\u673a\u7532\u653b\u51fb\u529b\u63d0\u5347" + this.pencents[this.index] + "%",
                this.level == Global.userData.vipAttackBuyCount + 1 ? (this.buyBtn.active = !0,
                this.unbuyBtn.active = !1) : Global.userData.vipAttackBuyCount >= this.level ? (this.buyBtn.active = !1,
                this.unbuyBtn.active = !0,
                this.unbuyBtn.children[0].active = !0) : (this.buyBtn.active = !1,
                this.unbuyBtn.active = !0,
                this.unbuyBtn.children[0].active = !1)),
                this.percentLab.string = this.pencents[this.index] + "%",
                this.price = Math.pow(4500, this.level),
                this.priceLab.string = this.formatScore(this.price)
            },
            buy: function() {
                cc.MainGame.addScore(-this.price) ? (this.showToast("\u8d2d\u4e70\u6210\u529f\uff01"),
                this.index % 2 == 0 ? (Global.userData.vipPreferBuyCount++,
                Global.userData.preferByVip = (100 - this.pencents[this.index]) / 100,
                cc.observer.call("vip", 1)) : (Global.userData.vipAttackBuyCount++,
                Global.userData.attacKByVip = (100 + this.pencents[this.index]) / 100,
                cc.observer.call("vip", 0)),
                cc.MainGame.saveUserData()) : this.showToast("\u91d1\u5e01\u4e0d\u8db3\uff01")
            }
        }),
        cc._RF.pop()
    }
    , {
        BaseUtils: "BaseUtils"
    }]
}, {}, ["LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min", "AdsManager", "AutoMegra", "BaseUtils", "DialogManager", "DialogManager2", "Game", "GameWarning", "Globals", "Guide", "Observer", "Position", "RewardedVideoAd", "TouchEvent", "Welcome", "LocalStorage", "AutoMegraDialog", "BaseDialog", "CannonDialog", "ChallengeDialog", "ConfirmDialog", "ExploreFailedDialog", "ExploreSuccessDialog", "GiftBoxDialog", "GiftDialog", "GoldDialog", "LevelDialog", "OfflineDialog", "PromotionAnimDialog", "PromotionDialog", "SellDialog", "SettingDialog", "SignDialog", "SpeedUpDialog", "StoreDialog", "TurntableDialog", "TurntableResultDialog", "receiveStarDialog", "ExploreChoose", "ExploreGame", "BoxFactory", "BulletFactory", "CannonFactory", "ExploreBoxFactory", "ExploreItem", "cannonItem", "vipItem", "NetApi", "Box", "Bullet", "Cannon", "Toast", "Aim", "Animations", "CoinRain", "CoinStarAnim", "GiftBox", "SVBetter", "UFO"]);
