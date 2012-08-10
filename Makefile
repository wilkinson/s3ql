#-  GNU Makefile

#-  Makefile ~~
#                                                       ~~ (c) SRW, 31 Jul 2012
#                                                   ~~ last updated 10 Aug 2012

PROJ_ROOT   :=  $(realpath $(dir $(firstword $(MAKEFILE_LIST))))

include $(CODEBANK)/src/Make/lib/srw.make

NODEJS  :=  $(call contingent, nodejs node)
NPM     :=  $(call contingent, npm)

TESTS   :=  $(realpath $(PROJ_ROOT)/test.js)

RM      :=  $(call contingent, grm rm) -rf

define run-each
    $(NODEJS) $(TESTS)
endef

.PHONY: all clean clobber distclean reset run

all: run

clean: reset

clobber: clean
	@   $(RM) npm-debug.log

distclean: clobber
	@   $(RM) $(PROJ_ROOT)/node_modules/

reset:
	@   $(call contingent, clear)

run: $(PROJ_ROOT)/node_modules/
	@   $(call run-each)

###

.PHONY: check test

check: test

test:
	@   $(NPM) test

###

$(PROJ_ROOT)/node_modules/: package.json
	@   if [ ! -d $@ ]; then                                            \
                $(NPM) install                                          ;   \
            fi

###

%:
	@   $(call alert, 'No target "$@" found.')

#-  vim:set syntax=make:
