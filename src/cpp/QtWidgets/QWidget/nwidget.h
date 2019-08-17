#pragma once
#include <QWidget>
#include <QStyleOption>
#include <QPainter>
#include <QStyle>
#include "src/cpp/core/NodeWidget/nodewidget.h"

class NWidget: public QWidget, public NodeWidget
{
    NODEWIDGET_IMPLEMENTATIONS
public:
    using QWidget::QWidget;
    // https://doc.qt.io/qt-5/stylesheet-reference.html
    void paintEvent(QPaintEvent *)
    {
        QStyleOption opt;
        opt.init(this);
        QPainter p(this);
        style()->drawPrimitive(QStyle::PE_Widget, &opt, &p, this);
    }
};

