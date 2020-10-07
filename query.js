var queries = [
  {
    "query": "show an area chart of how Share evolved over Years by Pos",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "show an area chart of how Share evolved over Years by Pos",
      "query": "show an area chart of how share evolved over years by pos",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Year",
            "Share",
            "Pos"
          ],
          "queryPhrase": "area chart",
          "visType": "areachart",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "area",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Year",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "color": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Year",
            "Share",
            "Pos"
          ],
          "queryPhrase": "area chart",
          "visType": "areachart",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "area",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Year",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "column": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "color": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Year": {
          "name": "Year",
          "queryPhrase": [
            "years"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "Age"
          ]
        },
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Pos": {
          "name": "Pos",
          "queryPhrase": [
            "pos"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "correlation": [
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Year",
              "Share"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Year": {
        "name": "Year",
        "queryPhrase": [
          "years"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "Age"
        ]
      },
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Pos": {
        "name": "Pos",
        "queryPhrase": [
          "pos"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "correlation": [
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Year",
            "Share"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Year",
          "Share",
          "Pos"
        ],
        "queryPhrase": "area chart",
        "visType": "areachart",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "area",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Year",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "color": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Year",
          "Share",
          "Pos"
        ],
        "queryPhrase": "area chart",
        "visType": "areachart",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "area",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Year",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "column": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "color": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "area",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "Year",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "color": {
          "field": "Pos",
          "type": "nominal",
          "aggregate": null
        },
        "tooltip": {
          "field": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "show me a stacked bar chart of Share for each pos over the years",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "show me a stacked bar chart of Share for each pos over the years",
      "query": "show me a stacked bar chart of share for each pos over the years",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Year",
            "Share",
            "Pos"
          ],
          "queryPhrase": "bar chart",
          "visType": "barchart",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "bar",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Year",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "color": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Year",
            "Share",
            "Pos"
          ],
          "queryPhrase": "bar chart",
          "visType": "barchart",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "bar",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Year",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "column": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "color": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Year": {
          "name": "Year",
          "queryPhrase": [
            "years"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "Age"
          ]
        },
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Pos": {
          "name": "Pos",
          "queryPhrase": [
            "pos"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "correlation": [
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Year",
              "Share"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Year": {
        "name": "Year",
        "queryPhrase": [
          "years"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "Age"
        ]
      },
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Pos": {
        "name": "Pos",
        "queryPhrase": [
          "pos"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "correlation": [
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Year",
            "Share"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Year",
          "Share",
          "Pos"
        ],
        "queryPhrase": "bar chart",
        "visType": "barchart",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "bar",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Year",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "color": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Year",
          "Share",
          "Pos"
        ],
        "queryPhrase": "bar chart",
        "visType": "barchart",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "bar",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Year",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "column": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "color": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "bar",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "Year",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "color": {
          "field": "Pos",
          "type": "nominal",
          "aggregate": null
        },
        "tooltip": {
          "field": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "scatterplot to show players' PER vs REB",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "scatterplot to show players' PER vs REB",
      "query": "scatterplot to show players per vs reb",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "PER",
            "Reb/g_rank",
            "Player"
          ],
          "queryPhrase": "scatterplot",
          "visType": "scatterplot",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "PER",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "Reb/g_rank",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "color": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "PER",
            "Reb/g_rank",
            "Player"
          ],
          "queryPhrase": "scatterplot",
          "visType": "scatterplot",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "PER",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "Reb/g_rank",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "column": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "color": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Player": {
          "name": "Player",
          "queryPhrase": [
            "players"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "PER": {
          "name": "PER",
          "queryPhrase": [
            "per"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Reb/g_rank": {
          "name": "Reb/g_rank",
          "queryPhrase": [
            "reb"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "correlation": [
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "PER",
              "Reb/g_rank"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Player": {
        "name": "Player",
        "queryPhrase": [
          "players"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "PER": {
        "name": "PER",
        "queryPhrase": [
          "per"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Reb/g_rank": {
        "name": "Reb/g_rank",
        "queryPhrase": [
          "reb"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "correlation": [
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "PER",
            "Reb/g_rank"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "PER",
          "Reb/g_rank",
          "Player"
        ],
        "queryPhrase": "scatterplot",
        "visType": "scatterplot",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "PER",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "Reb/g_rank",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "color": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "PER",
          "Reb/g_rank",
          "Player"
        ],
        "queryPhrase": "scatterplot",
        "visType": "scatterplot",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "PER",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "Reb/g_rank",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "column": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "color": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "point",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "PER",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "Reb/g_rank",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "color": {
          "field": "Player",
          "type": "nominal",
          "aggregate": null
        },
        "tooltip": {
          "field": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "scatterplot to show players' Share vs BLK",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "scatterplot to show players' Share vs BLK",
      "query": "scatterplot to show players share vs blk",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Share",
            "BLK",
            "Player"
          ],
          "queryPhrase": "scatterplot",
          "visType": "scatterplot",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "BLK",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "color": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Share",
            "BLK",
            "Player"
          ],
          "queryPhrase": "scatterplot",
          "visType": "scatterplot",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "BLK",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "column": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "color": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Share",
            "BLK%",
            "Player"
          ],
          "queryPhrase": "scatterplot",
          "visType": "scatterplot",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "BLK%",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "color": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Share",
            "BLK%",
            "Player"
          ],
          "queryPhrase": "scatterplot",
          "visType": "scatterplot",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "BLK%",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "column": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "color": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Player": {
          "name": "Player",
          "queryPhrase": [
            "players"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "BLK": {
          "name": "BLK",
          "queryPhrase": [
            "blk"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "BLK%"
          ]
        },
        "BLK%": {
          "name": "BLK%",
          "queryPhrase": [
            "blk"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "BLK"
          ]
        }
      },
      "taskMap": {
        "correlation": [
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Share",
              "BLK"
            ],
            "inferenceType": "implicit"
          },
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Share",
              "BLK%"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Player": {
        "name": "Player",
        "queryPhrase": [
          "players"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "BLK": {
        "name": "BLK",
        "queryPhrase": [
          "blk"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "BLK%"
        ]
      },
      "BLK%": {
        "name": "BLK%",
        "queryPhrase": [
          "blk"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "BLK"
        ]
      }
    },
    "taskMap": {
      "correlation": [
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Share",
            "BLK"
          ],
          "inferenceType": "implicit"
        },
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Share",
            "BLK%"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Share",
          "BLK",
          "Player"
        ],
        "queryPhrase": "scatterplot",
        "visType": "scatterplot",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "BLK",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "color": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Share",
          "BLK",
          "Player"
        ],
        "queryPhrase": "scatterplot",
        "visType": "scatterplot",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "BLK",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "column": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "color": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Share",
          "BLK%",
          "Player"
        ],
        "queryPhrase": "scatterplot",
        "visType": "scatterplot",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "BLK%",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "color": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Share",
          "BLK%",
          "Player"
        ],
        "queryPhrase": "scatterplot",
        "visType": "scatterplot",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "BLK%",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "column": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "color": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "point",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "BLK",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "color": {
          "field": "Player",
          "type": "nominal",
          "aggregate": null
        },
        "tooltip": {
          "field": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "scatterplot to show players' PER vs Share",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "scatterplot to show players' PER vs Share",
      "query": "scatterplot to show players per vs share",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Share",
            "PER",
            "Player"
          ],
          "queryPhrase": "scatterplot",
          "visType": "scatterplot",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "PER",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "color": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Share",
            "PER",
            "Player"
          ],
          "queryPhrase": "scatterplot",
          "visType": "scatterplot",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "PER",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "column": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "color": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Player": {
          "name": "Player",
          "queryPhrase": [
            "players"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "PER": {
          "name": "PER",
          "queryPhrase": [
            "per"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "correlation": [
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Share",
              "PER"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Player": {
        "name": "Player",
        "queryPhrase": [
          "players"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "PER": {
        "name": "PER",
        "queryPhrase": [
          "per"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "correlation": [
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Share",
            "PER"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Share",
          "PER",
          "Player"
        ],
        "queryPhrase": "scatterplot",
        "visType": "scatterplot",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "PER",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "color": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Share",
          "PER",
          "Player"
        ],
        "queryPhrase": "scatterplot",
        "visType": "scatterplot",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "PER",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "column": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "color": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "point",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "PER",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "color": {
          "field": "Player",
          "type": "nominal",
          "aggregate": null
        },
        "tooltip": {
          "field": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "scatterplot to show players' Share throughout the years",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "scatterplot to show players' Share throughout the years",
      "query": "scatterplot to show players share throughout the years",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Year",
            "Share",
            "Player"
          ],
          "queryPhrase": "scatterplot",
          "visType": "scatterplot",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Year",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "color": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Year",
            "Share",
            "Player"
          ],
          "queryPhrase": "scatterplot",
          "visType": "scatterplot",
          "tasks": [
            "correlation"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Year",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "column": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "color": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Player": {
          "name": "Player",
          "queryPhrase": [
            "players"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Year": {
          "name": "Year",
          "queryPhrase": [
            "years"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "Age"
          ]
        },
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "correlation": [
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Year",
              "Share"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Player": {
        "name": "Player",
        "queryPhrase": [
          "players"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Year": {
        "name": "Year",
        "queryPhrase": [
          "years"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "Age"
        ]
      },
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "correlation": [
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Year",
            "Share"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Year",
          "Share",
          "Player"
        ],
        "queryPhrase": "scatterplot",
        "visType": "scatterplot",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Year",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "color": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Year",
          "Share",
          "Player"
        ],
        "queryPhrase": "scatterplot",
        "visType": "scatterplot",
        "tasks": [
          "correlation"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Year",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "column": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "color": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "point",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "Year",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "color": {
          "field": "Player",
          "type": "nominal",
          "aggregate": null
        },
        "tooltip": {
          "field": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "show me a pie chart of Share for each team",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "show me a pie chart of Share for each team",
      "query": "show me a pie chart of share for each team",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Share",
            "Team"
          ],
          "queryPhrase": "pie chart",
          "visType": "piechart",
          "tasks": [
            "derived_value"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "arc",
              "tooltip": true
            },
            "encoding": {
              "theta": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": "mean"
              },
              "color": {
                "field": "Team",
                "type": "nominal",
                "aggregate": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Team": {
          "name": "Team",
          "queryPhrase": [
            "team"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "derived_value": [
          {
            "task": "derived_value",
            "queryPhrase": [],
            "operator": "AVG",
            "values": null,
            "attributes": [
              "Share"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Team": {
        "name": "Team",
        "queryPhrase": [
          "team"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "derived_value": [
        {
          "task": "derived_value",
          "queryPhrase": [],
          "operator": "AVG",
          "values": null,
          "attributes": [
            "Share"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Share",
          "Team"
        ],
        "queryPhrase": "pie chart",
        "visType": "piechart",
        "tasks": [
          "derived_value"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "arc",
            "tooltip": true
          },
          "encoding": {
            "theta": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": "mean"
            },
            "color": {
              "field": "Team",
              "type": "nominal",
              "aggregate": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "arc",
        "tooltip": true
      },
      "encoding": {
        "theta": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": "mean"
        },
        "color": {
          "field": "Team",
          "type": "nominal",
          "aggregate": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "show me players whoes AST is above 10 for single season",
    "accomplished_task": "FALSE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "show me players whoes AST is above 10 for single season",
      "query": "show me players whoes ast is above 10 for single season",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "AST",
            "Player"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "derived_value"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "bar",
              "tooltip": true
            },
            "encoding": {
              "y": {
                "field": "AST",
                "type": "quantitative",
                "aggregate": "mean",
                "axis": {
                  "format": "s"
                }
              },
              "x": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "AST%",
            "Player"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "derived_value"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "bar",
              "tooltip": true
            },
            "encoding": {
              "y": {
                "field": "AST%",
                "type": "quantitative",
                "aggregate": "mean",
                "axis": {
                  "format": "s"
                }
              },
              "x": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Player": {
          "name": "Player",
          "queryPhrase": [
            "players"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "AST": {
          "name": "AST",
          "queryPhrase": [
            "ast"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "AST%"
          ]
        },
        "AST%": {
          "name": "AST%",
          "queryPhrase": [
            "ast"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "AST"
          ]
        }
      },
      "taskMap": {
        "derived_value": [
          {
            "task": "derived_value",
            "queryPhrase": [],
            "operator": "AVG",
            "values": null,
            "attributes": [
              "AST"
            ],
            "inferenceType": "implicit"
          },
          {
            "task": "derived_value",
            "queryPhrase": [],
            "operator": "AVG",
            "values": null,
            "attributes": [
              "AST%"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Player": {
        "name": "Player",
        "queryPhrase": [
          "players"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "AST": {
        "name": "AST",
        "queryPhrase": [
          "ast"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "AST%"
        ]
      },
      "AST%": {
        "name": "AST%",
        "queryPhrase": [
          "ast"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "AST"
        ]
      }
    },
    "taskMap": {
      "derived_value": [
        {
          "task": "derived_value",
          "queryPhrase": [],
          "operator": "AVG",
          "values": null,
          "attributes": [
            "AST"
          ],
          "inferenceType": "implicit"
        },
        {
          "task": "derived_value",
          "queryPhrase": [],
          "operator": "AVG",
          "values": null,
          "attributes": [
            "AST%"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "AST",
          "Player"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "derived_value"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "bar",
            "tooltip": true
          },
          "encoding": {
            "y": {
              "field": "AST",
              "type": "quantitative",
              "aggregate": "mean",
              "axis": {
                "format": "s"
              }
            },
            "x": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "AST%",
          "Player"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "derived_value"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "bar",
            "tooltip": true
          },
          "encoding": {
            "y": {
              "field": "AST%",
              "type": "quantitative",
              "aggregate": "mean",
              "axis": {
                "format": "s"
              }
            },
            "x": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "bar",
        "tooltip": true
      },
      "encoding": {
        "y": {
          "field": "AST",
          "type": "quantitative",
          "aggregate": "mean",
          "axis": {
            "format": "s"
          }
        },
        "x": {
          "field": "Player",
          "type": "nominal",
          "aggregate": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "show me a donut chart of Share for each team",
    "accomplished_task": "FALSE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "show me a donut chart of Share for each team ",
      "query": "show me a donut chart of share for each team",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Share",
            "Team"
          ],
          "queryPhrase": "donut chart",
          "visType": "donutchart",
          "tasks": [
            "derived_value"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "arc",
              "innerRadius": 50,
              "tooltip": true
            },
            "encoding": {
              "y": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": "mean",
                "axis": {
                  "format": "s"
                }
              },
              "x": {
                "field": "Team",
                "type": "nominal",
                "aggregate": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Share",
            "Team"
          ],
          "queryPhrase": "donut chart",
          "visType": "donutchart",
          "tasks": [
            "derived_value"
          ],
          "inferenceType": "explicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "arc",
              "innerRadius": 50,
              "tooltip": true
            },
            "encoding": {
              "theta": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": "mean"
              },
              "color": {
                "field": "Team",
                "type": "nominal",
                "aggregate": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Team": {
          "name": "Team",
          "queryPhrase": [
            "team"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "derived_value": [
          {
            "task": "derived_value",
            "queryPhrase": [],
            "operator": "AVG",
            "values": null,
            "attributes": [
              "Share"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Team": {
        "name": "Team",
        "queryPhrase": [
          "team"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "derived_value": [
        {
          "task": "derived_value",
          "queryPhrase": [],
          "operator": "AVG",
          "values": null,
          "attributes": [
            "Share"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Share",
          "Team"
        ],
        "queryPhrase": "donut chart",
        "visType": "donutchart",
        "tasks": [
          "derived_value"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "arc",
            "innerRadius": 50,
            "tooltip": true
          },
          "encoding": {
            "y": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": "mean",
              "axis": {
                "format": "s"
              }
            },
            "x": {
              "field": "Team",
              "type": "nominal",
              "aggregate": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Share",
          "Team"
        ],
        "queryPhrase": "donut chart",
        "visType": "donutchart",
        "tasks": [
          "derived_value"
        ],
        "inferenceType": "explicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "arc",
            "innerRadius": 50,
            "tooltip": true
          },
          "encoding": {
            "theta": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": "mean"
            },
            "color": {
              "field": "Team",
              "type": "nominal",
              "aggregate": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "arc",
        "innerRadius": 50,
        "tooltip": true
      },
      "encoding": {
        "y": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": "mean",
          "axis": {
            "format": "s"
          }
        },
        "x": {
          "field": "Team",
          "type": "nominal",
          "aggregate": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "whoes BPM is the lowest in year 2020",
    "accomplished_task": "FALSE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "whoes BPM is the lowest in year 2020",
      "query": "whoes bpm is the lowest in year 2020",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Year",
            "OBPM"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Year",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "OBPM",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Year",
            "DBPM"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Year",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "DBPM",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Year",
            "BPM"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Year",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "BPM",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Year": {
          "name": "Year",
          "queryPhrase": [
            "year"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "OBPM": {
          "name": "OBPM",
          "queryPhrase": [
            "bpm"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "DBPM",
            "BPM"
          ]
        },
        "DBPM": {
          "name": "DBPM",
          "queryPhrase": [
            "bpm"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "OBPM",
            "BPM"
          ]
        },
        "BPM": {
          "name": "BPM",
          "queryPhrase": [
            "bpm"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "OBPM",
            "DBPM"
          ]
        }
      },
      "taskMap": {
        "correlation": [
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Year",
              "OBPM"
            ],
            "inferenceType": "implicit"
          },
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Year",
              "DBPM"
            ],
            "inferenceType": "implicit"
          },
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Year",
              "BPM"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Year": {
        "name": "Year",
        "queryPhrase": [
          "year"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "OBPM": {
        "name": "OBPM",
        "queryPhrase": [
          "bpm"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "DBPM",
          "BPM"
        ]
      },
      "DBPM": {
        "name": "DBPM",
        "queryPhrase": [
          "bpm"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "OBPM",
          "BPM"
        ]
      },
      "BPM": {
        "name": "BPM",
        "queryPhrase": [
          "bpm"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "OBPM",
          "DBPM"
        ]
      }
    },
    "taskMap": {
      "correlation": [
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Year",
            "OBPM"
          ],
          "inferenceType": "implicit"
        },
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Year",
            "DBPM"
          ],
          "inferenceType": "implicit"
        },
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Year",
            "BPM"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Year",
          "OBPM"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Year",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "OBPM",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Year",
          "DBPM"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Year",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "DBPM",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Year",
          "BPM"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Year",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "BPM",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "point",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "Year",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "OBPM",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "tooltip": {
          "field": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "which player has the highest PER",
    "accomplished_task": "FALSE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "which player has the highest PER",
      "query": "which player has the highest per",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "PER",
            "Player"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "derived_value"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "bar",
              "tooltip": true
            },
            "encoding": {
              "y": {
                "field": "PER",
                "type": "quantitative",
                "aggregate": "mean",
                "axis": {
                  "format": "s"
                }
              },
              "x": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Player": {
          "name": "Player",
          "queryPhrase": [
            "player"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "PER": {
          "name": "PER",
          "queryPhrase": [
            "per"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "derived_value": [
          {
            "task": "derived_value",
            "queryPhrase": [],
            "operator": "AVG",
            "values": null,
            "attributes": [
              "PER"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Player": {
        "name": "Player",
        "queryPhrase": [
          "player"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "PER": {
        "name": "PER",
        "queryPhrase": [
          "per"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "derived_value": [
        {
          "task": "derived_value",
          "queryPhrase": [],
          "operator": "AVG",
          "values": null,
          "attributes": [
            "PER"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "PER",
          "Player"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "derived_value"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "bar",
            "tooltip": true
          },
          "encoding": {
            "y": {
              "field": "PER",
              "type": "quantitative",
              "aggregate": "mean",
              "axis": {
                "format": "s"
              }
            },
            "x": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "bar",
        "tooltip": true
      },
      "encoding": {
        "y": {
          "field": "PER",
          "type": "quantitative",
          "aggregate": "mean",
          "axis": {
            "format": "s"
          }
        },
        "x": {
          "field": "Player",
          "type": "nominal",
          "aggregate": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "show me players whoes MVP rank is 1",
    "accomplished_task": "FALSE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "show me players whoes MVP rank is 1",
      "query": "show me players whoes mvp rank is 1",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "MVP_rank",
            "Player"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "derived_value"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "bar",
              "tooltip": true
            },
            "encoding": {
              "y": {
                "field": "MVP_rank",
                "type": "quantitative",
                "aggregate": "mean",
                "axis": {
                  "format": "s"
                }
              },
              "x": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Player": {
          "name": "Player",
          "queryPhrase": [
            "players"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "MVP_rank": {
          "name": "MVP_rank",
          "queryPhrase": [
            "mvp rank"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "derived_value": [
          {
            "task": "derived_value",
            "queryPhrase": [],
            "operator": "AVG",
            "values": null,
            "attributes": [
              "MVP_rank"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Player": {
        "name": "Player",
        "queryPhrase": [
          "players"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "MVP_rank": {
        "name": "MVP_rank",
        "queryPhrase": [
          "mvp rank"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "derived_value": [
        {
          "task": "derived_value",
          "queryPhrase": [],
          "operator": "AVG",
          "values": null,
          "attributes": [
            "MVP_rank"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "MVP_rank",
          "Player"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "derived_value"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "bar",
            "tooltip": true
          },
          "encoding": {
            "y": {
              "field": "MVP_rank",
              "type": "quantitative",
              "aggregate": "mean",
              "axis": {
                "format": "s"
              }
            },
            "x": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "bar",
        "tooltip": true
      },
      "encoding": {
        "y": {
          "field": "MVP_rank",
          "type": "quantitative",
          "aggregate": "mean",
          "axis": {
            "format": "s"
          }
        },
        "x": {
          "field": "Player",
          "type": "nominal",
          "aggregate": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "filter out player whoes AST is below 5",
    "accomplished_task": "FALSE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "filter out player whoes AST is below 5",
      "query": "filter out player whoes ast is below 5",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "AST",
            "Player"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "derived_value"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "bar",
              "tooltip": true
            },
            "encoding": {
              "y": {
                "field": "AST",
                "type": "quantitative",
                "aggregate": "mean",
                "axis": {
                  "format": "s"
                }
              },
              "x": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "AST%",
            "Player"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "derived_value"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "bar",
              "tooltip": true
            },
            "encoding": {
              "y": {
                "field": "AST%",
                "type": "quantitative",
                "aggregate": "mean",
                "axis": {
                  "format": "s"
                }
              },
              "x": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Player": {
          "name": "Player",
          "queryPhrase": [
            "player"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "AST": {
          "name": "AST",
          "queryPhrase": [
            "ast"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "AST%"
          ]
        },
        "AST%": {
          "name": "AST%",
          "queryPhrase": [
            "ast"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "AST"
          ]
        }
      },
      "taskMap": {
        "derived_value": [
          {
            "task": "derived_value",
            "queryPhrase": [],
            "operator": "AVG",
            "values": null,
            "attributes": [
              "AST"
            ],
            "inferenceType": "implicit"
          },
          {
            "task": "derived_value",
            "queryPhrase": [],
            "operator": "AVG",
            "values": null,
            "attributes": [
              "AST%"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Player": {
        "name": "Player",
        "queryPhrase": [
          "player"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "AST": {
        "name": "AST",
        "queryPhrase": [
          "ast"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "AST%"
        ]
      },
      "AST%": {
        "name": "AST%",
        "queryPhrase": [
          "ast"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "AST"
        ]
      }
    },
    "taskMap": {
      "derived_value": [
        {
          "task": "derived_value",
          "queryPhrase": [],
          "operator": "AVG",
          "values": null,
          "attributes": [
            "AST"
          ],
          "inferenceType": "implicit"
        },
        {
          "task": "derived_value",
          "queryPhrase": [],
          "operator": "AVG",
          "values": null,
          "attributes": [
            "AST%"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "AST",
          "Player"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "derived_value"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "bar",
            "tooltip": true
          },
          "encoding": {
            "y": {
              "field": "AST",
              "type": "quantitative",
              "aggregate": "mean",
              "axis": {
                "format": "s"
              }
            },
            "x": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "AST%",
          "Player"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "derived_value"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "bar",
            "tooltip": true
          },
          "encoding": {
            "y": {
              "field": "AST%",
              "type": "quantitative",
              "aggregate": "mean",
              "axis": {
                "format": "s"
              }
            },
            "x": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "bar",
        "tooltip": true
      },
      "encoding": {
        "y": {
          "field": "AST",
          "type": "quantitative",
          "aggregate": "mean",
          "axis": {
            "format": "s"
          }
        },
        "x": {
          "field": "Player",
          "type": "nominal",
          "aggregate": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "Chris Paul's Share over year",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "Chris Paul's Share over year",
      "query": "chris paul s share over year",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Year",
            "Share"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "filter",
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Year",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [
              {
                "filter": {
                  "field": "Player",
                  "oneOf": [
                    "Chris Paul"
                  ]
                }
              }
            ],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Year": {
          "name": "Year",
          "queryPhrase": [
            "year"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Player": {
          "name": "Player",
          "queryPhrase": [
            "chris paul"
          ],
          "inferenceType": "implicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "filter": [
          {
            "task": "filter",
            "queryPhrase": [
              "chris paul"
            ],
            "operator": "IN",
            "values": [
              "Chris Paul"
            ],
            "attributes": [
              "Player"
            ],
            "inferenceType": "explicit"
          }
        ],
        "correlation": [
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Year",
              "Share"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Year": {
        "name": "Year",
        "queryPhrase": [
          "year"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Player": {
        "name": "Player",
        "queryPhrase": [
          "chris paul"
        ],
        "inferenceType": "implicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "filter": [
        {
          "task": "filter",
          "queryPhrase": [
            "chris paul"
          ],
          "operator": "IN",
          "values": [
            "Chris Paul"
          ],
          "attributes": [
            "Player"
          ],
          "inferenceType": "explicit"
        }
      ],
      "correlation": [
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Year",
            "Share"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Year",
          "Share"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "filter",
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Year",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [
            {
              "filter": {
                "field": "Player",
                "oneOf": [
                  "Chris Paul"
                ]
              }
            }
          ],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "point",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "Year",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "tooltip": {
          "field": null
        }
      },
      "transform": [
        {
          "filter": {
            "field": "Player",
            "oneOf": [
              "Chris Paul"
            ]
          }
        }
      ],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "Michael Jordan's PTS vs Share",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "Michael Jordan's PTS vs Share",
      "query": "michael jordan s pts vs share",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Pts Won",
            "Share"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "filter",
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Pts Won",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [
              {
                "filter": {
                  "field": "Player",
                  "oneOf": [
                    "Michael Jordan"
                  ]
                }
              }
            ],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Pts Max",
            "Share"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "filter",
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Pts Max",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [
              {
                "filter": {
                  "field": "Player",
                  "oneOf": [
                    "Michael Jordan"
                  ]
                }
              }
            ],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Share",
            "Pt/g_rank"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "filter",
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "Pt/g_rank",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [
              {
                "filter": {
                  "field": "Player",
                  "oneOf": [
                    "Michael Jordan"
                  ]
                }
              }
            ],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Share",
            "PTS"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "filter",
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "PTS",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [
              {
                "filter": {
                  "field": "Player",
                  "oneOf": [
                    "Michael Jordan"
                  ]
                }
              }
            ],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Pts Won": {
          "name": "Pts Won",
          "queryPhrase": [
            "pts"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "Pts Max",
            "PTS",
            "Pt/g_rank"
          ]
        },
        "Pts Max": {
          "name": "Pts Max",
          "queryPhrase": [
            "pts"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "Pts Won",
            "PTS",
            "Pt/g_rank"
          ]
        },
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "PTS": {
          "name": "PTS",
          "queryPhrase": [
            "pts"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "Pts Won",
            "Pts Max",
            "Pt/g_rank"
          ]
        },
        "Pt/g_rank": {
          "name": "Pt/g_rank",
          "queryPhrase": [
            "pts"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "Pts Won",
            "Pts Max",
            "PTS"
          ]
        },
        "Player": {
          "name": "Player",
          "queryPhrase": [
            "michael jordan"
          ],
          "inferenceType": "implicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "filter": [
          {
            "task": "filter",
            "queryPhrase": [
              "michael jordan"
            ],
            "operator": "IN",
            "values": [
              "Michael Jordan"
            ],
            "attributes": [
              "Player"
            ],
            "inferenceType": "explicit"
          }
        ],
        "correlation": [
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Pts Won",
              "Share"
            ],
            "inferenceType": "implicit"
          },
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Pts Max",
              "Share"
            ],
            "inferenceType": "implicit"
          },
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Share",
              "PTS"
            ],
            "inferenceType": "implicit"
          },
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Share",
              "Pt/g_rank"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Pts Won": {
        "name": "Pts Won",
        "queryPhrase": [
          "pts"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "Pts Max",
          "PTS",
          "Pt/g_rank"
        ]
      },
      "Pts Max": {
        "name": "Pts Max",
        "queryPhrase": [
          "pts"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "Pts Won",
          "PTS",
          "Pt/g_rank"
        ]
      },
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "PTS": {
        "name": "PTS",
        "queryPhrase": [
          "pts"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "Pts Won",
          "Pts Max",
          "Pt/g_rank"
        ]
      },
      "Pt/g_rank": {
        "name": "Pt/g_rank",
        "queryPhrase": [
          "pts"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "Pts Won",
          "Pts Max",
          "PTS"
        ]
      },
      "Player": {
        "name": "Player",
        "queryPhrase": [
          "michael jordan"
        ],
        "inferenceType": "implicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "filter": [
        {
          "task": "filter",
          "queryPhrase": [
            "michael jordan"
          ],
          "operator": "IN",
          "values": [
            "Michael Jordan"
          ],
          "attributes": [
            "Player"
          ],
          "inferenceType": "explicit"
        }
      ],
      "correlation": [
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Pts Won",
            "Share"
          ],
          "inferenceType": "implicit"
        },
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Pts Max",
            "Share"
          ],
          "inferenceType": "implicit"
        },
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Share",
            "PTS"
          ],
          "inferenceType": "implicit"
        },
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Share",
            "Pt/g_rank"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Pts Won",
          "Share"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "filter",
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Pts Won",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [
            {
              "filter": {
                "field": "Player",
                "oneOf": [
                  "Michael Jordan"
                ]
              }
            }
          ],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Pts Max",
          "Share"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "filter",
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Pts Max",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [
            {
              "filter": {
                "field": "Player",
                "oneOf": [
                  "Michael Jordan"
                ]
              }
            }
          ],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Share",
          "Pt/g_rank"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "filter",
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "Pt/g_rank",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [
            {
              "filter": {
                "field": "Player",
                "oneOf": [
                  "Michael Jordan"
                ]
              }
            }
          ],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Share",
          "PTS"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "filter",
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "PTS",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [
            {
              "filter": {
                "field": "Player",
                "oneOf": [
                  "Michael Jordan"
                ]
              }
            }
          ],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "point",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "Pts Won",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "tooltip": {
          "field": null
        }
      },
      "transform": [
        {
          "filter": {
            "field": "Player",
            "oneOf": [
              "Michael Jordan"
            ]
          }
        }
      ],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "visualize AST",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "visualize AST",
      "query": "visualize ast",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "AST"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "distribution"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "bar",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "AST",
                "type": "quantitative",
                "aggregate": null,
                "bin": true,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "AST",
                "type": "quantitative",
                "aggregate": "count",
                "axis": {
                  "format": "s"
                }
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "AST"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "distribution"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "tick",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "AST",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "AST%"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "distribution"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "bar",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "AST%",
                "type": "quantitative",
                "aggregate": null,
                "bin": true,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "AST%",
                "type": "quantitative",
                "aggregate": "count",
                "axis": {
                  "format": "s"
                }
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "AST%"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "distribution"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "tick",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "AST%",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "AST": {
          "name": "AST",
          "queryPhrase": [
            "ast"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "AST%"
          ]
        },
        "AST%": {
          "name": "AST%",
          "queryPhrase": [
            "ast"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "AST"
          ]
        }
      },
      "taskMap": {
        "distribution": [
          {
            "task": "distribution",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "AST"
            ],
            "inferenceType": "implicit"
          },
          {
            "task": "distribution",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "AST%"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "AST": {
        "name": "AST",
        "queryPhrase": [
          "ast"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "AST%"
        ]
      },
      "AST%": {
        "name": "AST%",
        "queryPhrase": [
          "ast"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "AST"
        ]
      }
    },
    "taskMap": {
      "distribution": [
        {
          "task": "distribution",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "AST"
          ],
          "inferenceType": "implicit"
        },
        {
          "task": "distribution",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "AST%"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "AST"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "distribution"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "bar",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "AST",
              "type": "quantitative",
              "aggregate": null,
              "bin": true,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "AST",
              "type": "quantitative",
              "aggregate": "count",
              "axis": {
                "format": "s"
              }
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "AST"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "distribution"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "tick",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "AST",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "AST%"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "distribution"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "bar",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "AST%",
              "type": "quantitative",
              "aggregate": null,
              "bin": true,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "AST%",
              "type": "quantitative",
              "aggregate": "count",
              "axis": {
                "format": "s"
              }
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "AST%"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "distribution"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "tick",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "AST%",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "bar",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "AST",
          "type": "quantitative",
          "aggregate": null,
          "bin": true,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "AST",
          "type": "quantitative",
          "aggregate": "count",
          "axis": {
            "format": "s"
          }
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "show me Share and PER across Teams",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "show me Share and PER across Teams",
      "query": "show me share and per across teams",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Share",
            "PER",
            "Team"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "PER",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "color": {
                "field": "Team",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Share",
            "PER",
            "Team"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "PER",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "column": {
                "field": "Team",
                "type": "nominal",
                "aggregate": null
              },
              "color": {
                "field": "Team",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "PER": {
          "name": "PER",
          "queryPhrase": [
            "per"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Team": {
          "name": "Team",
          "queryPhrase": [
            "teams"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "correlation": [
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Share",
              "PER"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "PER": {
        "name": "PER",
        "queryPhrase": [
          "per"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Team": {
        "name": "Team",
        "queryPhrase": [
          "teams"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "correlation": [
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Share",
            "PER"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Share",
          "PER",
          "Team"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "PER",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "color": {
              "field": "Team",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Share",
          "PER",
          "Team"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "PER",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "column": {
              "field": "Team",
              "type": "nominal",
              "aggregate": null
            },
            "color": {
              "field": "Team",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "point",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "PER",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "color": {
          "field": "Team",
          "type": "nominal",
          "aggregate": null
        },
        "tooltip": {
          "field": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "Share Player PER",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "Share Player PER",
      "query": "share player per",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Share",
            "PER",
            "Player"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "PER",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "color": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Share",
            "PER",
            "Player"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "PER",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "column": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "color": {
                "field": "Player",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Player": {
          "name": "Player",
          "queryPhrase": [
            "player"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "PER": {
          "name": "PER",
          "queryPhrase": [
            "per"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "correlation": [
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Share",
              "PER"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Player": {
        "name": "Player",
        "queryPhrase": [
          "player"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "PER": {
        "name": "PER",
        "queryPhrase": [
          "per"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "correlation": [
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Share",
            "PER"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Share",
          "PER",
          "Player"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "PER",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "color": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Share",
          "PER",
          "Player"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "PER",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "column": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "color": {
              "field": "Player",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "point",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "PER",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "color": {
          "field": "Player",
          "type": "nominal",
          "aggregate": null
        },
        "tooltip": {
          "field": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "plot Share by TRB color by Pos",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "plot Share by TRB color by Pos",
      "query": "plot share by trb color by pos",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Share",
            "TRB",
            "Pos"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "TRB",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "color": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Share",
            "TRB",
            "Pos"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "TRB",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "column": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "color": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Share",
            "TRB%",
            "Pos"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "TRB%",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "color": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Share",
            "TRB%",
            "Pos"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "TRB%",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "column": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "color": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Pos": {
          "name": "Pos",
          "queryPhrase": [
            "pos"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "TRB": {
          "name": "TRB",
          "queryPhrase": [
            "trb"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "TRB%"
          ]
        },
        "TRB%": {
          "name": "TRB%",
          "queryPhrase": [
            "trb"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": true,
          "ambiguity": [
            "TRB"
          ]
        }
      },
      "taskMap": {
        "correlation": [
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Share",
              "TRB"
            ],
            "inferenceType": "implicit"
          },
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Share",
              "TRB%"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Pos": {
        "name": "Pos",
        "queryPhrase": [
          "pos"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "TRB": {
        "name": "TRB",
        "queryPhrase": [
          "trb"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "TRB%"
        ]
      },
      "TRB%": {
        "name": "TRB%",
        "queryPhrase": [
          "trb"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": true,
        "ambiguity": [
          "TRB"
        ]
      }
    },
    "taskMap": {
      "correlation": [
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Share",
            "TRB"
          ],
          "inferenceType": "implicit"
        },
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Share",
            "TRB%"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Share",
          "TRB",
          "Pos"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "TRB",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "color": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Share",
          "TRB",
          "Pos"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "TRB",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "column": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "color": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Share",
          "TRB%",
          "Pos"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "TRB%",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "color": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Share",
          "TRB%",
          "Pos"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "TRB%",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "column": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "color": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "point",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "TRB",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "color": {
          "field": "Pos",
          "type": "nominal",
          "aggregate": null
        },
        "tooltip": {
          "field": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "Share Pos PER",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "Share Pos PER",
      "query": "share pos per",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Share",
            "PER",
            "Pos"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "PER",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "color": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        },
        {
          "attributes": [
            "Share",
            "PER",
            "Pos"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "correlation"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "point",
              "tooltip": true
            },
            "encoding": {
              "x": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "y": {
                "field": "PER",
                "type": "quantitative",
                "aggregate": null,
                "axis": {
                  "format": "s"
                }
              },
              "column": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "color": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              },
              "tooltip": {
                "field": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Pos": {
          "name": "Pos",
          "queryPhrase": [
            "pos"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "PER": {
          "name": "PER",
          "queryPhrase": [
            "per"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "correlation": [
          {
            "task": "correlation",
            "queryPhrase": [],
            "operator": null,
            "values": null,
            "attributes": [
              "Share",
              "PER"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Pos": {
        "name": "Pos",
        "queryPhrase": [
          "pos"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "PER": {
        "name": "PER",
        "queryPhrase": [
          "per"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "correlation": [
        {
          "task": "correlation",
          "queryPhrase": [],
          "operator": null,
          "values": null,
          "attributes": [
            "Share",
            "PER"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Share",
          "PER",
          "Pos"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "PER",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "color": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      },
      {
        "attributes": [
          "Share",
          "PER",
          "Pos"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "correlation"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "point",
            "tooltip": true
          },
          "encoding": {
            "x": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "y": {
              "field": "PER",
              "type": "quantitative",
              "aggregate": null,
              "axis": {
                "format": "s"
              }
            },
            "column": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "color": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            },
            "tooltip": {
              "field": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "point",
        "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "y": {
          "field": "PER",
          "type": "quantitative",
          "aggregate": null,
          "axis": {
            "format": "s"
          }
        },
        "color": {
          "field": "Pos",
          "type": "nominal",
          "aggregate": null
        },
        "tooltip": {
          "field": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  },
  {
    "query": "show share as Pos",
    "accomplished_task": "TRUE",
    "query_type": "",
    "NL4DVoutput": {
      "query_raw": "show share as Pos",
      "query": "show share as pos",
      "dataset": "mvp_1981-2020.csv",
      "visList": [
        {
          "attributes": [
            "Share",
            "Pos"
          ],
          "queryPhrase": null,
          "visType": null,
          "tasks": [
            "derived_value"
          ],
          "inferenceType": "implicit",
          "vlSpec": {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "mark": {
              "type": "bar",
              "tooltip": true
            },
            "encoding": {
              "y": {
                "field": "Share",
                "type": "quantitative",
                "aggregate": "mean",
                "axis": {
                  "format": "s"
                }
              },
              "x": {
                "field": "Pos",
                "type": "nominal",
                "aggregate": null
              }
            },
            "transform": [],
            "data": {
              "url": "mvp_1981-2020.csv",
              "format": {
                "type": "csv"
              }
            }
          }
        }
      ],
      "attributeMap": {
        "Share": {
          "name": "Share",
          "queryPhrase": [
            "share"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        },
        "Pos": {
          "name": "Pos",
          "queryPhrase": [
            "pos"
          ],
          "inferenceType": "explicit",
          "isAmbiguous": false,
          "ambiguity": []
        }
      },
      "taskMap": {
        "derived_value": [
          {
            "task": "derived_value",
            "queryPhrase": [],
            "operator": "AVG",
            "values": null,
            "attributes": [
              "Share"
            ],
            "inferenceType": "implicit"
          }
        ]
      },
      "followUpQuery": false,
      "contextObj": null
    },
    "attributeMap": {
      "Share": {
        "name": "Share",
        "queryPhrase": [
          "share"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      },
      "Pos": {
        "name": "Pos",
        "queryPhrase": [
          "pos"
        ],
        "inferenceType": "explicit",
        "isAmbiguous": false,
        "ambiguity": []
      }
    },
    "taskMap": {
      "derived_value": [
        {
          "task": "derived_value",
          "queryPhrase": [],
          "operator": "AVG",
          "values": null,
          "attributes": [
            "Share"
          ],
          "inferenceType": "implicit"
        }
      ]
    },
    "visList": [
      {
        "attributes": [
          "Share",
          "Pos"
        ],
        "queryPhrase": null,
        "visType": null,
        "tasks": [
          "derived_value"
        ],
        "inferenceType": "implicit",
        "vlSpec": {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "mark": {
            "type": "bar",
            "tooltip": true
          },
          "encoding": {
            "y": {
              "field": "Share",
              "type": "quantitative",
              "aggregate": "mean",
              "axis": {
                "format": "s"
              }
            },
            "x": {
              "field": "Pos",
              "type": "nominal",
              "aggregate": null
            }
          },
          "transform": [],
          "data": {
            "url": "mvp_1981-2020.csv",
            "format": {
              "type": "csv"
            }
          }
        }
      }
    ],
    "vegaLite": {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "mark": {
        "type": "bar",
        "tooltip": true
      },
      "encoding": {
        "y": {
          "field": "Share",
          "type": "quantitative",
          "aggregate": "mean",
          "axis": {
            "format": "s"
          }
        },
        "x": {
          "field": "Pos",
          "type": "nominal",
          "aggregate": null
        }
      },
      "transform": [],
      "data": {
        "url": "mvp_1981-2020.csv",
        "format": {
          "type": "csv"
        }
      }
    }
  }
]