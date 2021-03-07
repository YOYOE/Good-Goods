module.exports = {
    configureWebpack: {
        devServer: {
            port: 8077,
            open: true,
            before(app) {

                // Information Pool
                let userpoor = [{
                    username: 'admin',
                    password: 'password',
                }];

                // Register
                app.get('/api/register', (req, res) => {
                    const { username } = req.query
                    const userlength = userpoor.filter(v => v.username == username).length
                    if (userlength > 0) {
                        res.json({
                            success: false,
                            message: 'Username already exists'
                        })
                    } else {
                        res.json({
                            success: true,
                            message: 'Success'
                        })
                    }
                });

                // Login
                let tokenkey = 'tokenkey'
                app.get('/api/login', (req, res) => {
                    const { username, password } = req.query
                    if (username == 'admin' && password == 'password') {
                        res.json({
                            code: 0,
                            message: 'Login successfully',
                            token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 10 * 1000)
                        })
                    } else {
                        res.json({
                            code: 1,
                            message: 'Wrong password'
                        })
                    }
                })

                // Slides
                app.get('/api/banner', (req, res) => {
                    res.json({
                        data: [{
                                url: 'https://www.amazon.com/',
                                image: 'https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/grid_image/460x497/17f82f742ffe127f42dca9de82fb58b1/6/b/1612899902_M0565OREU_M928_E01_GH.jpg'
                            },
                            {
                                url: 'https://www.amazon.com/',
                                image: 'https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/grid_image/460x497/17f82f742ffe127f42dca9de82fb58b1/z/i/1611687099_1ADPO093YKK_H57E_E01_GH.jpg'
                            },
                            {
                                url: 'https://www.amazon.com/',
                                image: 'https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/grid_image/460x497/17f82f742ffe127f42dca9de82fb58b1/n/O/1608048021_S0126OSEP_M918_E01_GH.jpg'
                            }
                        ],
                    })
                });

                // Categories
                app.get('/api/rollinglist', (req, res) => {
                    res.json({
                        data: [
                            [{
                                    url: 'https://www.amazon.com/',
                                    image: 'https://images-na.ssl-images-amazon.com/images/I/51ZIQxjxTxL.jpg',
                                    label: 'Electronics'
                                },
                                {
                                    url: 'https://www.amazon.com/',
                                    image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                    label: 'Computers'
                                },
                                {
                                    url: 'https://www.amazon.com/',
                                    image: 'https://images-na.ssl-images-amazon.com/images/G/01/SmartHome/StorefrontRefresh/Round-2/XCM_Manual_1263220_us_homeimprov_smarthome_storefront_400x400-8_e51e3810-846a-4377-8dd5-1c1400256055.jpg',
                                    label: 'Smart Home'
                                }, {
                                    url: 'https://www.amazon.com/',
                                    image: 'https://images-na.ssl-images-amazon.com/images/I/41TUaKdmrkL.jpg',
                                    label: 'Health'
                                },
                                {
                                    url: 'https://www.amazon.com/',
                                    image: 'https://m.media-amazon.com/images/I/61po+blqBuL._AC_UL320_.jpg',
                                    label: 'Pet Supplies'
                                },
                                {
                                    url: 'https://www.amazon.com/',
                                    image: 'https://m.media-amazon.com/images/I/61aQt6lRLvL._AC_UL320_.jpg',
                                    label: 'Personal Care'
                                }
                            ],
                            [{
                                    url: 'https://www.amazon.com/',
                                    image: 'https://images-na.ssl-images-amazon.com/images/I/51ZIQxjxTxL.jpg',
                                    label: 'Electronics'
                                },
                                {
                                    url: 'https://www.amazon.com/',
                                    image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                    label: 'Computers'
                                },
                                {
                                    url: 'https://www.amazon.com/',
                                    image: 'https://images-na.ssl-images-amazon.com/images/G/01/SmartHome/StorefrontRefresh/Round-2/XCM_Manual_1263220_us_homeimprov_smarthome_storefront_400x400-8_e51e3810-846a-4377-8dd5-1c1400256055.jpg',
                                    label: 'Smart Home'
                                }, {
                                    url: 'https://www.amazon.com/',
                                    image: 'https://images-na.ssl-images-amazon.com/images/I/41TUaKdmrkL.jpg',
                                    label: 'Health'
                                },
                                {
                                    url: 'https://www.amazon.com/',
                                    image: 'https://m.media-amazon.com/images/I/61po+blqBuL._AC_UL320_.jpg',
                                    label: 'Pet Supplies'
                                },
                                {
                                    url: 'https://www.amazon.com/',
                                    image: 'https://m.media-amazon.com/images/I/61aQt6lRLvL._AC_UL320_.jpg',
                                    label: 'Personal Care'
                                }
                            ],
                        ]
                    })
                });

                // Lists
                app.get('/api/classify', (req, res) => {
                    switch (req.query.type) {
                        case '0':
                            res.json({
                                data: [{
                                        image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                        label: 'SAMSUNG'
                                    },
                                    {
                                        image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                        label: 'DELL'
                                    },
                                    {
                                        image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                        label: 'SAMSUNG'
                                    },
                                    {
                                        image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                        label: 'DELL'
                                    },
                                ]
                            });
                            break;
                        case '1':
                            res.json({
                                data: [{
                                        image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                        label: 'DELL'
                                    },
                                    {
                                        image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                        label: 'DELL'
                                    },
                                    {
                                        image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                        label: 'DELL'
                                    }
                                ]
                            });
                            break;
                        case '2':
                            res.json({
                                data: [{
                                        image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                        label: 'DELL'
                                    },
                                    {
                                        image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                        label: 'DELL'
                                    }
                                ]
                            });
                            break;
                        case '3':
                            res.json({
                                data: [{
                                    image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                    label: 'DELL'
                                }]
                            });
                            break;
                        case '4':
                            res.json({
                                data: [{
                                    image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                    label: 'DELL'
                                }]
                            });
                            break;
                        case '5':
                            res.json({
                                data: [{
                                    image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg',
                                    label: 'DELL'
                                }]
                            });
                            break;
                    }
                })
            }
        }
    },
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                    './src/theme'
                ]
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    }
}