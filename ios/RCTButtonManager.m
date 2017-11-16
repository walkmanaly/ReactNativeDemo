//
//  RCTButtonManager.m
//  ReactNativeDemo
//
//  Created by Nick on 2017/11/16.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RCTButtonManager.h"
#import <React/RCTConvert.h>
#import "CButton.h"
@implementation RCTButtonManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  CButton *button = [[CButton alloc] init];
  [button setTitle:@"button" forState:UIControlStateNormal];
  [button setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
  [button setTitleColor:[UIColor orangeColor] forState:UIControlStateHighlighted];
  return button;
}

RCT_EXPORT_VIEW_PROPERTY(enabled, BOOL)

@end
