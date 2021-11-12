jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },


        //----------For Node Connections--------//
        endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: {
                strokeWidth: 5,
                stroke: "rgba(255,0,0,1)"
            },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 1,
            isTarget: true,
            dropOptions: {
                tolerance: "touch",
                hoverClass: "dropHover"
            }
        },

        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },

        //--------- For Ground Connection--------//
        endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: {
                strokeWidth: 5,
                stroke: "rgba(0,0,0,1)"
            },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: {
                tolerance: "touch",
                hoverClass: "dropHover"
            }
        },
        prepare1 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint1);
        },


        // get a jsPlumb instance, setting some appropriate defaults and a Container.
        instance = jsPlumb.getInstance({
            DragOptions: {
                cursor: 'wait',
                zIndex: 20
            },
            Endpoint: ["Image", {
                url: "images/conndot.png"
        }],
            Connector: ["Bezier", {
                curviness: -40
        }],
            Container: "canvas"
        });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e2 = prepare("ld2"),
            e3 = prepare("ld3"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),


            clearBtn = jsPlumb.getSelector("#delete-connct"),
            addBtn = jsPlumb.getSelector("#add");

        var detachLinks = jsPlumb.getSelector(".littledot .detach");
        instance.on(detachLinks, "click", function (e) {
            instance.deleteConnectionsForElement(this.getAttribute("rel"));
            jsPlumbUtil.consume(e);
        });

    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {

        // Defining Correct Connections

        var correct_connections_1_4 = [
            {
                "source": "ld1",
                "target": "ld4"
            },

            {
                "source": "ld4",
                "target": "ld1"
            }
        ];

        var correct_connections_5_6 = [
            {
                "source": "ld5",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld5"
            }
        ];

        var correct_connections_2_3 = [
            {
                "source": "ld2",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld2"
            }
        ];



        var correct_connections_7_8 = [
            {
                "source": "ld7",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld7"
            }
        ];

        var correct_connections_9_10 = [
            {
                "source": "ld9",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld9"
            }
        ];




        //allowed connections - a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld4"
            },

            {
                "source": "ld4",
                "target": "ld1"
            },

            {
                "source": "ld5",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld5"
            },



            {
                "source": "ld2",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld2"
            },


            {
                "source": "ld7",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld7"
            },
            {
                "source": "ld9",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld9"
            },
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_4 = false;
        var is_connected_5_6 = false;
        var is_connected_2_3 = false;
        var is_connected_7_8 = false;
        var is_connected_9_10 = false;
        var unallowed_connection_present = false;
        var count = 0; // counts number of connection

        //checking for 1_4 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_4) {
                is_connected_1_4 = correct_connections_1_4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false

        });

        //checking for 5_6 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_5_6) {
                is_connected_5_6 = correct_connections_5_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });


        //checking for 2_3 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_2_3) {
                is_connected_2_3 = correct_connections_2_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 7_8 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_7_8) {
                is_connected_7_8 = correct_connections_7_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 9_10 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_9_10) {
                is_connected_9_10 = correct_connections_9_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });


        // Checking if circuit is connected properly
        if (is_connected_1_4 && is_connected_5_6 && is_connected_2_3 && is_connected_7_8 && is_connected_9_10 && !unallowed_connection_present) {

            alert("RIGHT CONNECTION");

            document.getElementById('add').style.visibility = "visible";
            document.getElementById('obsButton').style.visibility = "visible";
            document.getElementById('add').disabled = false;
            document.getElementById('resistance').disabled = false;


        } else {
            alert("Please check your connection");
            return;
        }



    });
});


// To Reset Connections
function deleteconnection() {
    window.location.reload();
}
